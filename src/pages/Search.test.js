import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'

import sinon from 'sinon'

import { theme } from '../App'
import Search from './Search'
import * as api from '../api'

let component;
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <Search />
    </MuiThemeProvider>
  )
})

beforeAll(() => {
    ReactDOM.createPortal = jest.fn((component, node) => {
        return component
    })
})

describe('initial state', () => {
  it('should start with a search field with default text', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should start with a disabled search button', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should start with default text in the results box', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('search button', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <Search />
        </MuiThemeProvider>
      , div)
    })
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should be enabled when the search field is not blank', () => {
    const searchInput = div.querySelector('input')
    ReactTestUtils.act(() => {
      searchInput.value = 'i can haz unit tests'
      ReactTestUtils.Simulate.change(searchInput)
    })

    const searchButton = div.querySelector('button')
    expect(searchButton.disabled).toBe(false)
  })

  it('should be disabled when the query is blank', () => {
    const searchButton = div.querySelector('button')
    expect(searchButton.disabled).toBe(true)
  })

  it('should be enabled when the user enters a query', () => {
    const searchInput = div.querySelector('input')
    ReactTestUtils.act(() => {
      searchInput.value = 'hello there this is a song search'
      ReactTestUtils.Simulate.change(searchInput)
    })

    const searchButton = div.querySelector('button')
    expect(searchButton.disabled).toBe(false)
  })
})

// Helper function for the next three test collections.
const setupAndQuerySearchForm = async () => {
  const div = document.createElement('div')
  ReactTestUtils.act(() => {
    ReactDOM.render(
      <MuiThemeProvider theme={theme}>
        <Search />
      </MuiThemeProvider>
    , div)
  })

  const searchInput = div.querySelector('input')
  ReactTestUtils.act(() => {
    searchInput.value = 'hello'
    ReactTestUtils.Simulate.change(searchInput)
  })

  const searchForm = div.querySelector('form')
  await ReactTestUtils.act(async () => {
    await ReactTestUtils.Simulate.submit(searchForm)
  })

  return div
}

describe('normal API calls', () => {
  let div
  beforeEach(async () => {
    sinon.stub(api, 'searchSongs')

    // Mock response contains only one track item for manageable size
    api.searchSongs.returns(Promise.resolve({
      "tracks" : {
        "href" : "https://api.spotify.com/v1/search?query=the+night+we+met&type=track&offset=0&limit=20",
        "items" : [ {
          "album" : {
            "album_type" : "album",
            "artists" : [ {
              "external_urls" : {
                "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
              },
              "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
              "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
              "name" : "Lord Huron",
              "type" : "artist",
              "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
            } ],
            "available_markets" : [ "CA", "US" ],
            "external_urls" : {
              "spotify" : "https://open.spotify.com/album/3yoNZlqerJnsnMN5EDwwBS"
            },
            "href" : "https://api.spotify.com/v1/albums/3yoNZlqerJnsnMN5EDwwBS",
            "id" : "3yoNZlqerJnsnMN5EDwwBS",
            "images" : [ {
              "height" : 640,
              "url" : "https://i.scdn.co/image/d0a15f9288814a7e3f199ab2d1a6b0c9a9a633b5",
              "width" : 640
            }, {
              "height" : 300,
              "url" : "https://i.scdn.co/image/9bcea4ada214a061cecce6d565319f839ea83ce1",
              "width" : 300
            }, {
              "height" : 64,
              "url" : "https://i.scdn.co/image/0a2f11966d40cd6fc87ee70b71d8547578e87fe8",
              "width" : 64
            } ],
            "name" : "Strange Trails",
            "release_date" : "2015-04-07",
            "release_date_precision" : "day",
            "total_tracks" : 14,
            "type" : "album",
            "uri" : "spotify:album:3yoNZlqerJnsnMN5EDwwBS"
          },
          "artists" : [ {
            "external_urls" : {
              "spotify" : "https://open.spotify.com/artist/6ltzsmQQbmdoHHbLZ4ZN25"
            },
            "href" : "https://api.spotify.com/v1/artists/6ltzsmQQbmdoHHbLZ4ZN25",
            "id" : "6ltzsmQQbmdoHHbLZ4ZN25",
            "name" : "Lord Huron",
            "type" : "artist",
            "uri" : "spotify:artist:6ltzsmQQbmdoHHbLZ4ZN25"
          } ],
          "available_markets" : [ "CA", "US" ],
          "disc_number" : 1,
          "duration_ms" : 208211,
          "explicit" : false,
          "external_ids" : {
            "isrc" : "US53Q1200103"
          },
          "external_urls" : {
            "spotify" : "https://open.spotify.com/track/0QZ5yyl6B6utIWkxeBDxQN"
          },
          "href" : "https://api.spotify.com/v1/tracks/0QZ5yyl6B6utIWkxeBDxQN",
          "id" : "0QZ5yyl6B6utIWkxeBDxQN",
          "is_local" : false,
          "name" : "The Night We Met",
          "popularity" : 76,
          "preview_url" : "https://p.scdn.co/mp3-preview/1c0da00b5c95a1a6c9dfc05b14a1a628a6e0ad73?cid=159ac88b1c534ed7ae41602f1e558a49",
          "track_number" : 14,
          "type" : "track",
          "uri" : "spotify:track:0QZ5yyl6B6utIWkxeBDxQN"
        } ],
        "limit" : 20,
        "next" : "https://api.spotify.com/v1/search?query=the+night+we+met&type=track&offset=20&limit=20",
        "offset" : 0,
        "previous" : null,
        "total" : 204
      }
    }))

    div = await setupAndQuerySearchForm()
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
    api.searchSongs.restore()
  })

  it('should trigger a song search when the search button is clicked', () => {
    expect(api.searchSongs.firstCall.args[0]).toEqual({
    // expect(api.searchSongs.getCall(0)).toEqual({
      q: 'hello'
    })
  })

  it('should populate the song results container when search results arrive', () => {
    // Mock search results yield only one song, so we expect results container to have one child.
    const searchResults = div.querySelector('div#searchResults') // use .find
    // console.log("searchResults: ", searchResults)
    expect(searchResults.children.length).toEqual(1)
  })
})


describe('API calls that return no search results', () => {
  let div
  beforeEach(async () => {
    sinon.stub(api, 'searchSongs')

    api.searchSongs.returns(Promise.resolve({
      "tracks" : {
        "href" : "https://api.spotify.com/v1/search?query=the+night+we+met&type=track&offset=0&limit=20",
        "items" : [], // no track items returned
        "limit" : 20,
        "next" : "https://api.spotify.com/v1/search?query=the+night+we+met&type=track&offset=20&limit=20",
        "offset" : 0,
        "previous" : null,
        "total" : 0
      }
    }))

    div = await setupAndQuerySearchForm()
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
    api.searchSongs.restore()
  })

  it('should trigger a song search when the search button is clicked', () => {
    expect(api.searchSongs.firstCall.args[0]).toEqual({
      q: 'hello'
    })
  })

  it('should render the noResults div', () => {
    // Our mock search results yield one image, so we expect our results container to have one child.
    const searchResults = div.querySelector('div#noResults')
    expect(searchResults).not.toBeNull()
  })
})


describe('failed API calls', () => {
  let div
  beforeEach(async () => {
    sinon.stub(api, 'searchSongs')
    api.searchSongs.returns(Promise.reject('Mock failure'))

    div = await setupAndQuerySearchForm()

  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
    api.searchSongs.restore()
  })

  it('should display an alert when the API call fails', () => {
    // The document should render the div containing the error dialog.

    // const searchErrorText = div.querySelector('div#error')
    // expect(searchErrorText.textContent).toEqual('Sorry, but something went wrong.')

    const searchErrorDiv = div.querySelector('div#error')
    expect(searchErrorDiv !== null).toBe(true)
    expect(searchErrorDiv.children.length).toBeGreaterThan(0)

    // console.log("div", div)

    // OLD ERROR STUFF
    // const searchError = div.querySelector('div#error-title')
    // expect(searchError.textContent).toEqual('Sorry, but something went wrong.')
  })
})
