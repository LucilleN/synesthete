import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import RecommendationButton from '../components/RecommendationButton'
import StartButton from '../components/StartButton'
import ErrorDialog from '../components/ErrorDialog'

import { Redirect } from 'react-router-dom';

import { getAudioFeatures, getRecommendation } from '../api'

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

  const [songID, setSongID] = useState(null)
  const [error, setError] = useState(null)
  // ONLY FOR SEEING IN LOCALHOST
  // const [error, setError] = useState('something')
  const [audioFeatures, setAudioFeatures] = useState(null)
  const [recommendedSong, setRecommendedSong] = useState(null)

  const [existingAudioNode, setAudioNode] = useState(null)
  const [existingAnalyser, setAnalyser] = useState(null)
  const [existingContext, setContext] = useState(null)

  const defaultErrorText = 'Sorry, but something went wrong.'

  // Equivalent of componentDidMount (ONLY RUNS ONCE)
  useEffect(() => {
    setAudioFeatures(null)
    performAudioFeaturesQuery()
    // loadMusicFile()

  }, [])

  useEffect(() => {
    loadMusicFile()
  }, [trackObject])

  // Equivalent of componentDidMount and componentDidUpdate
  useEffect(() => {
    const { songID } = props.match.params
    setSongID(songID)
    // loadMusicFile()

    if (!audioFeatures) {
      performAudioFeaturesQuery()
    }
  })


  /*-------------------------------------------
                  API STUFF
  -------------------------------------------*/
  const performAudioFeaturesQuery = async () => {
    console.log("performAudioFeaturesQuery")

    setError(null)

    try {
      const result = await getAudioFeatures({
        id: songID,
        headers: {
          'Authorization': 'Bearer '
        }
      })

      setAudioFeatures(result)

    } catch (error) {
      setError(defaultErrorText)
    }
  }


  const performRecommendationQuery = async event => {
    event.preventDefault()
    setError(null)

    let currentRecommendation;

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

      // recommendation might be a song with a null preview url; if so, recommend another one
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

  // function setUpAndPlayAnimation(canvas, analyser, bufferLength, dataArray, ctx) {
  //   const WIDTH = canvas.width;
  //   const HEIGHT = canvas.height;
  //
  //   const barWidth = (WIDTH / bufferLength) * 40;
  //
  //   let barHeight;
  //   let x = 0;
  //
  //   analyser.getByteFrequencyData(dataArray);
  //
  //   let r, g, b, a;
  //   let bars = 120 // Set total number of bars you want per frame
  //
  //   const colors = [
  //     [179, 0, 54], // red
  //     [255, 60, 0], // red-orange
  //     [255, 123, 0], // orange
  //     [255, 178, 0], // honey yellow
  //     [255, 243, 163], // light yellow
  //     [203, 247, 57], // yellow-green
  //     [25, 191, 0], // green
  //     [0, 161, 155], // blue-green
  //     [0, 181, 169], // green-blue
  //     [0, 113, 212], // blue
  //     [39, 16, 173], // indigo
  //     [75, 0, 145], // dark purple
  //     [145, 10, 145], // magenta
  //   ]
  //
  //   function getColor(index, offset) {
  //     let newIndex = index + offset
  //     if (newIndex >= colors.length) {
  //       newIndex -= colors.length
  //     }
  //     if (newIndex < 0) {
  //       newIndex += colors.length
  //     }
  //     return colors[newIndex]
  //   }
  //
  //
  //   function renderFrame() {
  //     console.log("renderframe called")
  //     requestAnimationFrame(renderFrame)
  //
  //     x = 0
  //
  //     ctx.fillStyle = "rgba(0,0,0,0.1)"; // Clears canvas before rendering bars (black with opacity 0.2)
  //     ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars
  //
  //     for (let i = 0; i < bars; i++) {
  //       barHeight = (dataArray[i] * 2);
  //       const barHeightMax = 255 * 2;
  //       const multiple = 6
  //       // offset = -10 // Lord Huron, the Night We Met (key: A major)
  //       let offset = -7 // Kina Grannis, Iris (key: F# Major)
  //
  //       if (i < 1 * multiple){ // red
  //         [r, g, b] = getColor(0, offset)
  //       } else if (i < 2 * multiple){ // red-orange
  //         [r, g, b] = getColor(1, offset)
  //       } else if (i < 3 * multiple){ // orange
  //         [r, g, b] = getColor(2, offset)
  //       } else if (i < 4 * multiple){ // yellow
  //         [r, g, b] = getColor(3, offset)
  //       } else if (i < 5 * multiple){ // light yellow
  //         [r, g, b] = getColor(4, offset)
  //       } else if (i < 6 * multiple){ // yellow-green
  //         [r, g, b] = getColor(5, offset)
  //       } else if (i < 7 * multiple){ // green
  //         [r, g, b] = getColor(6, offset)
  //       } else if (i < 8 * multiple){ // blue-green
  //         [r, g, b] = getColor(7, offset)
  //       } else if (i < 9 * multiple){ // green-blue
  //         [r, g, b] = getColor(8, offset)
  //       } else if (i < 10 * multiple){ // dark blue
  //         [r, g, b] = getColor(9, offset)
  //       } else if (i < 11 * multiple){ // indigo
  //         [r, g, b] = getColor(10, offset)
  //       } else if (i < 12 * multiple){ // dark purple
  //         [r, g, b] = getColor(11, offset)
  //       } else { // magenta
  //         [r, g, b] = getColor(12, offset)
  //       }
  //
  //       a = (barHeight / barHeightMax) ** 3.5;
  //
  //       console.log("creating a bar")
  //       ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
  //       ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);
  //
  //       x += barWidth + 10 // Gives 10px space between each bar
  //     }
  //   }
  //
  //   renderFrame()
  //
  // }
  //

  /*-------------------------------------------
                LOAD MUSIC FILE
  -------------------------------------------*/
  const loadMusicFile = () => {
    console.log("CALLING loadMusicFile!!")

    const audio = audioRef.current

    audio.src = trackObject.preview_url

    audio.play();

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    const context = (existingContext) ? existingContext : new AudioContext()
    const audioNode = (existingAudioNode) ? existingAudioNode : context.createMediaElementSource(audio)
    const analyser = (existingAnalyser) ? existingAnalyser : context.createAnalyser()

    audioNode.connect(analyser); // Connects the audio context source to the analyser

    analyser.connect(context.destination); // End destination of an audio graph in a given context
    analyser.fftSize = 16384;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    // const WIDTH = canvas.width;
    // const HEIGHT = canvas.height;
    //
    // const barWidth = (WIDTH / bufferLength) * 40;
    //
    // let barHeight;
    // let x = 0;


    const colors = [
      [179, 0, 54], // red
      [255, 60, 0], // red-orange
      [255, 123, 0], // orange
      [255, 178, 0], // honey yellow
      [255, 243, 163], // light yellow
      [203, 247, 57], // yellow-green
      [25, 191, 0], // green
      [0, 161, 155], // blue-green
      [0, 181, 169], // green-blue
      [0, 113, 212], // blue
      [39, 16, 173], // indigo
      [75, 0, 145], // dark purple
      [145, 10, 145], // magenta
    ]

    function getColor(index, offset) {
      let newIndex = index + offset
      if (newIndex >= colors.length) {
        newIndex -= colors.length
      }
      if (newIndex < 0) {
        newIndex += colors.length
      }
      return colors[newIndex]
    }

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const barWidth = (WIDTH / bufferLength) * 40;

    let barHeight;
    let x = 0;

    function renderFrame(/*{ canvas, analyser, dataArray, ctx, key = 'C', acousticness = 0.5, energy = 0.5 }*/) {

      x = 0;

      // console.log("RENDERFRAME CALLED")
      requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "rgba(0,0,0,0.1)"; // Clears canvas before rendering bars (black with opacity 0.2)
      ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars

      let r, g, b, a;
      let bars = 120 // Set total number of bars you want per frame


      for (let i = 0; i < bars; i++) {
        barHeight = (dataArray[i] * 2);
        const barHeightMax = 255 * 2;
        const multiple = 6
        // offset = -10 // Lord Huron, the Night We Met (key: A major)
        let offset = -7 // Kina Grannis, Iris (key: F# Major)

        if (i < 1 * multiple){ // red
          [r, g, b] = getColor(0, offset)
        } else if (i < 2 * multiple){ // red-orange
          [r, g, b] = getColor(1, offset)
        } else if (i < 3 * multiple){ // orange
          [r, g, b] = getColor(2, offset)
        } else if (i < 4 * multiple){ // yellow
          [r, g, b] = getColor(3, offset)
        } else if (i < 5 * multiple){ // light yellow
          [r, g, b] = getColor(4, offset)
        } else if (i < 6 * multiple){ // yellow-green
          [r, g, b] = getColor(5, offset)
        } else if (i < 7 * multiple){ // green
          [r, g, b] = getColor(6, offset)
        } else if (i < 8 * multiple){ // blue-green
          [r, g, b] = getColor(7, offset)
        } else if (i < 9 * multiple){ // green-blue
          [r, g, b] = getColor(8, offset)
        } else if (i < 10 * multiple){ // dark blue
          [r, g, b] = getColor(9, offset)
        } else if (i < 11 * multiple){ // indigo
          [r, g, b] = getColor(10, offset)
        } else if (i < 12 * multiple){ // dark purple
          [r, g, b] = getColor(11, offset)
        } else { // magenta
          [r, g, b] = getColor(12, offset)
        }

        a = (barHeight / barHeightMax) ** 3.5;

        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

        x += barWidth + 10 // Gives 10px space between each bar
      }
    }


    audio.play();
    renderFrame();
    // setUpAndPlayAnimation(canvas, analyser, bufferLength, dataArray, ctx);

    if (!existingAudioNode) {
      setAudioNode(audioNode)
    }
    if (!existingAnalyser) {
      setAnalyser(analyser)
    }
    if (!existingContext) {
      setContext(context)
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
        <RecommendationButton className={classes.recommendationButton} handleClick={performRecommendationQuery}/>
      </div>
      <Typography className={classes.subtitle}>
        "{trackObject.name}" by {trackObject.artists[0].name}
      </Typography>
      {error && (
        <div id="error">
          <ErrorDialog error={error} errorSubtitle={"Try refreshing the page or starting a new search."}/>
        </div>
      )}
      {recommendedSong &&
        <Redirect to={{
            pathname: `/visualization/${recommendedSong.id}`,
            state: { trackObject: recommendedSong }
          }}
        />
      }
    </div>
  )
}

export default withStyles(styles)(Visualization)
