let api = 'https://misconfigured-app.com/'
// const API_KEY = 'dc6zaTOxFJmzC' // Giphy's public beta key (thank you Giphy).
const authorizationUrl = 'https://accounts.spotify.com/api/token'
const authorizationKey = 'Basic MTU5YWM4OGIxYzUzNGVkN2FlNDE2MDJmMWU1NThhNDk6YmUxOTFmMTg3ZGZlNDgzMjg3MDAxZDNhNWZlYTEyNTM='
const authorizationHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': authorizationKey
}

const getAccessToken = () => {
  const response = fetch(authorizationUrl, {
    authorizationHeaders
  }).then(okCheck, emitNativeError)
    .then(response => response.json())

  return response.access_token
}

const apiHost = host => { api = host }
const urlFor = resource => `${api}${resource}`

const HTTP_OK = 200

const throwResponseError = response => {
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const emitNativeError = error => {
  throw error
}

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response
  } else {
    throwResponseError(response)
  }
}

const okCheck = statusCheck([HTTP_OK])

const getHeaders = () => {
  const token = getAccessToken()
  const headers = {
    'Authorization': `Bearer ${token}`
  }
  return headers
}

//
// const paramsWithApiKey = params => {
//   const result = new URLSearchParams(params)
//   result.set('api_key', API_KEY)
//   return result
// }

// The fetch function initiates a connection to the web service.
// fetch returns a _promise_: an object that represents a future result.
// Thus, the function actually returns right away. However, when the
// anticipated result does show up, the code specifies what to do using
// either `then` or `catch`. Both functions accept another function,
// to be called upon a successful or failed promise, respectively.
// Furthermore, then `then` function can be chained: its return result
// is passed to the next `then` function as an argument. Here, the initial
// handler converts the raw result into JSON. That JSON then goes to the
// next handler, which does the actual work of putting the result on the
// web page.
//
// The design of fetch allows this entire sequence to be rendered in a
// _single statement_, thus obviating the need for curly braces but
// resulting in what many will view to be a decrease in readability
// (for those who aren’t used to functional-style programming). YMMV

// const query = (resource, params) => fetch(`${urlFor(resource)}?${paramsWithApiKey(params)}`, {
const query = (resource, params) => {
  const optionalParams = (params) ? `?${new URLSearchParams(params)}` : ""

  const headers = getHeaders()

  fetch(`${urlFor(resource)}${optionalParams}`, {
    headers
  }).then(okCheck, emitNativeError)
    .then(response => response.json())
}

// const searchGifs = params => query('gifs/search', params)
const searchSongs = params => query('search', params)

const getRecommendation = params => query('recommendations', params)

const getAudioFeatures = songID => query(`audio-features/${songID}`)


export {
  apiHost,
  // searchGifs
  searchSongs,
  getAudioFeatures,
  getRecommendation
}
