let api = 'https://misconfigured-app.com/' // what is this lol

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
  }
  throwResponseError(response)
}

const okCheck = statusCheck([HTTP_OK])

// original api url:
// const authorizationUrl = 'https://accounts.spotify.com/api/token'

// Using the relay server, replace api url with this instead:
const corsAuthorizationUrl = 'http://localhost:3000/api/token'
const authorizationKey = 'Basic MTU5YWM4OGIxYzUzNGVkN2FlNDE2MDJmMWU1NThhNDk6YmUxOTFmMTg3ZGZlNDgzMjg3MDAxZDNhNWZlYTEyNTM='
const authorizationHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: authorizationKey,
}
const authorizationBody = {
  grant_type: 'client_credentials',
}
const authSearchParams = Object.keys(authorizationBody)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(authorizationBody[key])}`)
  .join('&')

let tokenIsValid = false
let currentToken = ''

const getAccessToken = async () => {
  const response = await fetch(corsAuthorizationUrl, {
    method: 'POST',
    headers: authorizationHeaders,
    body: authSearchParams,
  }).then(okCheck, emitNativeError)
    .then(verifiedResponse => verifiedResponse.json())

  console.log('Got here in getAccessToken')

  tokenIsValid = true
  setTimeout(() => {
    tokenIsValid = false
  }, 3000)
  currentToken = response.access_token

  return response.access_token
}

const apiHost = host => { api = host }
const urlFor = resource => `${api}${resource}`

const getHeaders = async () => {
  let token = ''
  if (tokenIsValid) {
    token = currentToken
  } else {
    token = await getAccessToken()
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  return headers
}

const query = async (resource, params) => {
  const optionalParams = (params) ? `?${new URLSearchParams(params)}` : ''

  const headers = await getHeaders()
  console.log('making a regular api call; headers: ', headers)

  try {
    const response = await fetch(`${urlFor(resource)}${optionalParams}`, {
      headers,
    }).then(okCheck, emitNativeError)
      .then(verifiedResponse => verifiedResponse.json())
      .catch(error => { throw error })
    return response
  } catch (error) {
    throw error
  }
}

const searchSongs = params => query('search', params)
const getRecommendation = params => query('recommendations', params)
const getAudioFeatures = songID => query(`audio-features/${songID}`)

export {
  apiHost,
  searchSongs,
  getAudioFeatures,
  getRecommendation,
  getAccessToken,
}
