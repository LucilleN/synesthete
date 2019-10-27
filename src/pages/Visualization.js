import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import RecommendationButton from '../components/RecommendationButton'
import StartButton from '../components/StartButton'
import ErrorDialog from '../components/ErrorDialog'

import { Redirect } from 'react-router-dom'

import { getRecommendation } from '../api'
import { loadMusic, performAudioFeaturesQuery } from './visualizationUtilities'
import { defaultErrorText } from '../App'

export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  fileInput: {
    zIndex: 3,
    color: 'white'
  },
  urlInput: {
    zIndex: 3,
    color: theme.palette.dark.pink,
    width: 250,
    margin: 15
  },
  urlButton: {
    zIndex: 3
  },
  recommendationButton: {
    zIndex: 10,
    marginTop: 200
  },
  canvas: {
    position: 'fixed',
    top: '60px',
    left: '0px',
    width: '100%',
    height: 'calc(100%-60px)',
    background: 'black',
    zIndex: 0
  },
  audio:{
    position: 'fixed',
    bottom: '20px',
    width: '90vw',
    height: '35px',
    zIndex: 3,
    opacity: 0.1,
    '&:hover': {
       opacity: 0.8,
    }
  },
  titleBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    zIndex: 4,
    color: theme.palette.light.pink,
    fontSize: '3rem',
    textAlign: 'center',
    marginTop: 5
  },
  subtitle: {
    zIndex: 4,
    color: theme.palette.dark.pink,
    fontSize: '1.75rem',
    textAlign: 'center',
    marginBottom: 8,
    marginTop: -32
  },
  songInfoContainer: {
    zIndex: 4,
    width: '100%'
  },
  songInfo: {
    zIndex: 4,
    color: theme.palette.light.pink,
    fontSize: '0.75rem',
    textAlign: 'left',
    width: '100%',
    marginLeft: 8
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
       color: theme.palette.dark.pink
    }
  },
  buttonBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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
       color: theme.palette.dark.purple
    }
  }
})

const Visualization = props => {
  const { classes } = props
  const { trackObject } = props.location.state

  const audioRef = useRef(null)
  const canvasRef = useRef(null)

  const [songID, setSongID] = useState(props.match && props.match.params ? props.match.params.songID : null)
  const [error, setError] = useState(null)
  const [audioFeatures, setAudioFeatures] = useState(null)
  const [recommendedSong, setRecommendedSong] = useState(null)

  const [existingAudioNode, setAudioNode] = useState(null)
  const [existingAnalyser, setAnalyser] = useState(null)
  const [existingContext, setContext] = useState(null)

  useEffect(() => {
    performAudioFeaturesQuery({
      setError,
      songID,
      setAudioFeatures,
      defaultErrorText
    })

  }, [songID])

  const keyOffset = audioFeatures ? audioFeatures.key : 0
  useEffect(() => {
    console.log("--calling useEffect--")
    console.log("dependencies: ", songID, existingAnalyser, existingAudioNode, existingContext, keyOffset)

    performAudioFeaturesQuery({
      setError,
      songID,
      setAudioFeatures,
      defaultErrorText
    })

    loadMusic({
      audioRef: audioRef,
      canvasRef: canvasRef,
      srcUrl: trackObject.preview_url,
      existingContext: existingContext,
      setContext: setContext,
      existingAudioNode: existingAudioNode,
      setAudioNode: setAudioNode,
      existingAnalyser: existingAnalyser,
      setAnalyser: setAnalyser,
      setError: setError,
      keyOffset
    })
  }, [trackObject, songID, existingAnalyser, existingAudioNode, existingContext, keyOffset])
  // }, [trackObject, songID])

  useEffect(() => {
    if (!songID) {
      return
    }

    setSongID(songID)

    if (!audioFeatures) {
      performAudioFeaturesQuery({
        setError,
        songID,
        setAudioFeatures,
        defaultErrorText
      })
    }
  }, [songID, audioFeatures])

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
        target_key: `${audioFeatures.key}`
      })
      currentRecommendation = result.tracks[0]

      // Recommendation might be a song with a null preview_url; if so, recommend another one
      while (!currentRecommendation.preview_url) {
        const result = await getRecommendation({
          limit: 1,
          seed_tracks: `${currentRecommendation.id}`,
          seed_artists: `${currentRecommendation.artists[0].id}`
        })
        currentRecommendation = result.tracks[0]
      }

      setRecommendedSong(result.tracks[0])

    } catch (error) {
      setError(defaultErrorText)
    }
  }

  return (
    <div className={classes.root}>
      <canvas ref={canvasRef} id="canvas" width="300" height="300" className={classes.canvas}></canvas>
      <audio ref={audioRef} id="audio" crossOrigin="anonymous" controls className={classes.audio}></audio>
      <div className={classes.titleBar}>
        <StartButton href="/search" text="< new search"/>
        <Typography className={classes.title}>
          Visualization:<br></br>
        </Typography>
        <RecommendationButton id="recommendation-button" className={classes.recommendationButton} handleClick={performRecommendationQuery}/>
      </div>
      <Typography className={classes.subtitle}>
        "{trackObject.name}" by {trackObject.artists[0].name}
      </Typography>
      {error && (
        <div id="error">
          <ErrorDialog error={error} errorSubtitle={"Try refreshing the page or starting a new search."}/>
        </div>
      )}
      {recommendedSong && (
        <Redirect to={{
            pathname: `/visualization/${recommendedSong.id}`,
            state: { trackObject: recommendedSong }
          }}
        />
      )}
    </div>
  )
}

export default withStyles(styles)(Visualization)
