import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import { MuiThemeProvider } from '@material-ui/core/styles'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import { theme } from '../App'
import SearchResultRow from './SearchResultRow'

const track = {
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
}

let component
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <SearchResultRow song={track}/>
    </MuiThemeProvider>
  )
})

describe('initial state', () => {
  it('should render the song title and artist name', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when it is clicked', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <Router>
          <MuiThemeProvider theme={theme}>
            <SearchResultRow song={track}/>
          </MuiThemeProvider>
        </Router>
      , div)
    })
    const searchResultRow = div.querySelector('#search-result-row')
    ReactTestUtils.act(() => {
      ReactTestUtils.Simulate.click(searchResultRow)
    })
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should no longer render the search result row after the redirect', () => {
    const searchResultRow = div.querySelector('#search-result-row')
    expect(searchResultRow).toBeNull()
  })

})
