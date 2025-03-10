import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom'

import RecommendationButton from '../components/RecommendationButton'
import StartButton from '../components/StartButton'
import ErrorDialog from '../components/ErrorDialog'

import { getRecommendation } from '../api'
import { loadMusic, performAudioFeaturesQuery } from './visualizationUtilities'
import { defaultErrorText } from '../App'

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fileInput: {
    zIndex: 3,
    color: 'white',
  },
  urlInput: {
    zIndex: 3,
    color: theme.palette.dark.pink,
    width: 250,
    margin: 15,
  },
  urlButton: {
    zIndex: 3,
  },
  recommendationButton: {
    zIndex: 10,
    marginTop: 200,
  },
  canvas: {
    position: 'fixed',
    top: '60px',
    left: '0px',
    width: '100%',
    height: 'calc(100%-60px)',
    background: 'black',
    zIndex: 0,
  },
  audio: {
    position: 'fixed',
    bottom: '20px',
    width: '90vw',
    height: '35px',
    zIndex: 3,
    opacity: 0.1,
    '&:hover': {
      opacity: 0.8,
    },
  },
  titleBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    zIndex: 4,
    color: theme.palette.light.pink,
    fontSize: '3rem',
    textAlign: 'center',
    marginTop: 5,
  },
  subtitle: {
    zIndex: 4,
    color: theme.palette.dark.pink,
    fontSize: '1.75rem',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: -32,
  },
  songInfoContainer: {
    zIndex: 4,
    width: '100%',
  },
  songInfo: {
    zIndex: 4,
    color: theme.palette.light.pink,
    fontSize: '0.75rem',
    textAlign: 'left',
    width: '100%',
    marginLeft: 8,
  },
  loadOptionButton: {
    zIndex: 4,
    color: theme.palette.white,
    fontSize: '1rem',
    background: theme.palette.dark.pink,
    height: '60px',
    width: '250px',
    borderRadius: '30px',
    border: 'none',
    margin: '10px 20px',
    '&:hover': {
      background: theme.palette.white,
      color: theme.palette.dark.pink,
    },
  },
  buttonBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    zIndex: 4,
    color: theme.palette.white,
    fontSize: '1rem',
    background: theme.palette.dark.purple,
    height: '60px',
    width: '250px',
    borderRadius: '30px',
    border: 'none',
    margin: '10px 20px',
    textTransform: 'none',
    '&:hover': {
      background: theme.palette.white,
      color: theme.palette.dark.purple,
    },
  },
})

const Visualization = props => {
  const { classes } = props
  const { trackObject } = props.location.state

  // May need this in the future to allow users to access a song's visualization just by
  // clicking on a saved link rather than going through the search every time, but this
  // would require another API call to get the trackObject based on the songID, so I
  // chose not to implement it for this project.
  // const { songID } = props.match.params

  const audioRef = useRef(null)
  const canvasRef = useRef(null)

  const [error, setError] = useState(null)
  const [audioFeatures, setAudioFeatures] = useState(null)
  const [recommendedSong, setRecommendedSong] = useState(null)

  const [songHistory, setSongHistory] = useState(new Set([trackObject.id]))

  const [existingAudioNode, setAudioNode] = useState(null)
  const [existingAnalyser, setAnalyser] = useState(null)
  const [existingContext, setContext] = useState(null)

  const [canLoadMusic, setCanLoadMusic] = useState(false)

  if (!trackObject) {
    setError('No track object found')
  }

  useEffect(() => {
    if (trackObject) {
      performAudioFeaturesQuery({
        setError,
        songID: trackObject.id,
        setAudioFeatures,
        defaultErrorText,
      })
    }
  }, [trackObject])

  useEffect(() => {
    setCanLoadMusic(true)
  }, [audioFeatures])

  useEffect(() => {
    if (canLoadMusic && audioFeatures) {
      loadMusic({
        audioRef,
        canvasRef,
        srcUrl: trackObject.preview_url,
        existingContext,
        setContext,
        existingAudioNode,
        setAudioNode,
        existingAnalyser,
        setAnalyser,
        setError,
        audioFeatures,
      })
    }
    setCanLoadMusic(false)
  }, [canLoadMusic])

  const performRecommendationQuery = async event => {
    event.preventDefault()
    setError(null)

    let currentRecommendation

    try {
      const result = await getRecommendation({
        limit: 1,
        seed_tracks: `${trackObject.id}`,
        seed_artists: `${trackObject.artists[0].id}`,
        target_energy: `${audioFeatures.energy}`,
        target_valence: `${audioFeatures.valence}`,
        target_acousticness: `${audioFeatures.acousticness}`,
        target_key: `${audioFeatures.key}`,
      })

      currentRecommendation = result.tracks[0]

      const isSameSong = (track1, track2) => track1.id === track2.id

      // Recommendation might be a song with a null preview_url, or it might be
      // the current song, or it might have already been listened to; if so,
      // recommend another one
      while (!currentRecommendation.preview_url
        || isSameSong(trackObject, currentRecommendation)
        || songHistory.has(currentRecommendation.id)
      ) {
        const newResult = await getRecommendation({
          limit: 3,
          seed_tracks: `${currentRecommendation.id}`,
          target_key: `${audioFeatures.key}`,
          target_energy: `${audioFeatures.energy}`,
          target_acousticness: `${audioFeatures.acousticness}`,
          target_loudness: `${audioFeatures.loudness}`,
        })
        currentRecommendation = newResult.tracks[0]
      }

      setRecommendedSong(currentRecommendation)
      setSongHistory(songHistory.add(result.tracks[0].id))
    } catch (e) {
      setError(defaultErrorText)
    }
  }

  return (
    <div className={classes.root}>
      <canvas ref={canvasRef} id="canvas" width="300" height="300" className={classes.canvas} />
      <audio ref={audioRef} id="audio" crossOrigin="anonymous" controls className={classes.audio} />
      <div className={classes.titleBar}>
        <StartButton href="/search" text="< new search" />
        <Typography className={classes.title}>
          Visualization:
          <br />
        </Typography>
        <RecommendationButton
          className={classes.recommendationButton}
          handleClick={performRecommendationQuery}
        />
      </div>
      <Typography className={classes.subtitle}>
        "{trackObject.name}" by {trackObject.artists[0].name}
      </Typography>
      {recommendedSong && (
        <Redirect
          to={{
            pathname: `/visualization/${recommendedSong.id}`,
            state: { trackObject: recommendedSong },
          }}
        />
      )}
      {error && (
        <div id="error">
          <ErrorDialog error={error} errorSubtitle={"The Visualizer doesn't work when it's been loaded externally. Try refreshing the page, clicking on the \"get a visually similar song\" button, or starting a new search."} />
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(Visualization)
