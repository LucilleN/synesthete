import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'

import sinon from 'sinon'

import { theme } from '../App'
import Visualization from './Visualization'
import * as visualizationUtilities from './visualizationUtilities'
import * as api from '../api'

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

const audioFeatures = {
  "danceability": 0.441,
  "energy": 0.379,
  "key": 2,
  "loudness": -9.545,
  "mode": 1,
  "speechiness": 0.0449,
  "acousticness": 0.968,
  "instrumentalness": 0.262,
  "liveness": 0.639,
  "valence": 0.105,
  "tempo": 174.118,
  "type": "audio_features",
  "id": "0QZ5yyl6B6utIWkxeBDxQN",
  "uri": "spotify:track:0QZ5yyl6B6utIWkxeBDxQN",
  "track_href": "https://api.spotify.com/v1/tracks/0QZ5yyl6B6utIWkxeBDxQN",
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/0QZ5yyl6B6utIWkxeBDxQN",
  "duration_ms": 208227,
  "time_signature": 3
}

let component;
beforeEach(async () => {
  await TestRenderer.act(async () => {
    component = TestRenderer.create(
      <MuiThemeProvider theme={theme}>
        <Visualization location={{ state: { trackObject: track } }}/>
      </MuiThemeProvider>
    )
  })
  // console.log("beforeEach: component", component)
})
//put this in a router too??? idk?

describe('initial state', () => {
  // let div
  // beforeEach(() => {
  //   div = document.createElement('div')
  //   ReactTestUtils.act(() => {
  //     ReactDOM.render(
  //       <MuiThemeProvider theme={theme}>
  //         <Visualization />
  //       </MuiThemeProvider>
  //     , div)
  //   })
  // })

  it('should have a button to navigate back to search and a button to get a recommendation', () => {
    // console.log("component", component)
    // console.log("props.location", component.props.location)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should display the title and artist of the current song being played', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render a canvas', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render an audio element', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})

describe('loading music', () => {
  let div
  beforeEach(async () => {
    sinon.stub(visualizationUtilities, 'loadMusic')
    sinon.stub(api, 'getAudioFeatures')

    div = document.createElement('div')
    await ReactTestUtils.act(async () => {
      await ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <Visualization location={{ state: { trackObject: track } }}/>
        </MuiThemeProvider>
      , div)
    })
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
    visualizationUtilities.loadMusic.restore()
    api.getAudioFeatures.restore()
  })

  it('still renders a canvas', () => {
    const canvas = div.querySelector('#canvas')
    expect(canvas).not.toBeNull()
  })

  it('automatically loads music', () => {
    // const tree = component.toJSON()
    // expect(tree).toMatchSnapshot()
    expect(visualizationUtilities.loadMusic.called).toBe(true)
  })

  it('gets the audio features', () => {
    expect(api.getAudioFeatures.called).toBe(true)
  })

})

describe('the recommendation button', () => {
  let div
  beforeEach(async () => {
    // sinon.stub(visualizationUtilities, 'loadMusic')
    sinon.stub(api, 'getRecommendation')

    div = document.createElement('div')
    await ReactTestUtils.act(async () => {
      await ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <Visualization location={{ state: { trackObject: track } }}/>
        </MuiThemeProvider>
      , div)
    })

  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div)
    api.getRecommendation.restore()
  })

  xit('should call the getRecommendation function when clicked', () => {
    const recommendationButton = div.querySelector("#recommendation-button")
    ReactTestUtils.act(() => {
      ReactTestUtils.Simulate.click(recommendationButton)
    })
    // expect(api.getRecommendation.firstCall.args[0]).toEqual({
    //   limit: 1,
    //   seed_tracks: `${track.id}`,
    //   seed_artists: `${track.artists[0].id}`,
    //   target_energy: `${audioFeatures.energy}`,
    //   target_valence: `${audioFeatures.valence}`,
    //   target_acousticness: `${audioFeatures.acousticness}`,
    //   target_key: `${audioFeatures.key}`
    // })
    expect(api.getRecommendation.called).toBe(true)
  })

})
