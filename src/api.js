let api = 'https://misconfigured-app.com/' // what is this lol


// original api url below
const authorizationUrl = 'https://accounts.spotify.com/api/token'
// use this instead:
// const corsAuthorizationUrl = 'http://localhost:3000/token'
const corsAuthorizationUrl = 'http://localhost:3000/api/token'
const authorizationKey = 'Basic MTU5YWM4OGIxYzUzNGVkN2FlNDE2MDJmMWU1NThhNDk6YmUxOTFmMTg3ZGZlNDgzMjg3MDAxZDNhNWZlYTEyNTM='
const authorizationHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  'Authorization': authorizationKey
}
const authorizationBody = {
  'grant_type': 'client_credentials'
}
const authSearchParams = Object.keys(authorizationBody).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(authorizationBody[key])
}).join('&')


let tokenIsValid = false
let currentToken = ""

const getAccessToken = async () => {
  console.log("in getAccessToken")
  const response = await fetch(corsAuthorizationUrl, {
    method: 'POST',
    headers: authorizationHeaders,
    // mode: 'no-cors',
    body: authSearchParams
  }).then(okCheck, emitNativeError)
    .then(response => response.json())

  console.log("Got here in getAccessToken")

  tokenIsValid = true
  setTimeout(() => {
    tokenIsValid = false
  }, 3000)
  currentToken = response.access_token

  return response.access_token
}


const apiHost = host => { api = host }
const urlFor = resource => `${api}${resource}`

const HTTP_OK = 200

const throwResponseError = response => {
  // console.log("before response", response)
  // console.log("before response.statusText", response.statusText)

  const error = new Error(response.statusText)
  error.response = response

  // console.log("after response", response)
  // console.log("after response.statusText", response.statusText)

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

const getHeaders = async () => {
  let token = ""
  if (tokenIsValid) {
    token = currentToken
  }
  else {
    token = await getAccessToken()
  }
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
const query = async (resource, params) => {
  const optionalParams = (params) ? `?${new URLSearchParams(params)}` : ""

  const headers = await getHeaders()
  console.log("regular api call headers: ", headers)

  try {
    const response = await fetch(`${urlFor(resource)}${optionalParams}`, {
      headers
    }).then(okCheck, emitNativeError)
      .then(response => response.json())
      .catch(error => { throw error })
    return response
  } catch (error) {
    throw error
  }
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
