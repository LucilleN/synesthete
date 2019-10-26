import React, { useState, useRef } from 'react'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './Visualization'

// TODO This is SUPER DIRTY but at least proves that if we maintain the same context, audioNode, and analyser,
// then things stay OK.
let context, audioNode, analyser

const UploadVisualization = props => {
  const { classes } = props

  const [url, setUrl] = useState('')
  const [uploadFileSelected, setUploadFileSelected] = useState(false)
  const [loadUrlSelected, setLoadUrlSelected] = useState(false)

  const audioRef = useRef(null)
  const canvasRef = useRef(null)
  const fileRef = useRef(null)

  const [existingAudioNode, setAudioNode] = useState(null)
  const [existingAnalyser, setAnalyser] = useState(null)
  const [existingContext, setContext] = useState(null)


  const handleReload = () => {
    window.location.reload(false);
  }

  /*-------------------------------------------
                LOAD MUSIC FILE
  -------------------------------------------*/
  const loadMusicFile = () => {
    const audio = audioRef.current

    const file = fileRef.current
    if (file && file.files.length > 0) {
      audio.src = URL.createObjectURL(file.files[0])
    }
    else {
      audio.src = url
    }
    // audio.src = "https://p.scdn.co/mp3-preview/1c0da00b5c95a1a6c9dfc05b14a1a628a6e0ad73?cid=159ac88b1c534ed7ae41602f1e558a49"
    // audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
    console.log("audio.src: " + audio.src)

    // // The hookup only needs to be done once.
    // if (context && audioNode && analyser) {
    //   audio.play();
    //   return
    // }

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    // context = new AudioContext(); // (Interface) Audio-processing graph
    // audioNode = context.createMediaElementSource(audio); // Give audio context an audio source
    // analyser = context.createAnalyser(); // Create an analyser for the audio context

    const context = (existingContext) ? existingContext : new AudioContext()
    const audioNode = (existingAudioNode) ? existingAudioNode : context.createMediaElementSource(audio)
    const analyser = (existingAnalyser) ? existingAnalyser : context.createAnalyser()

    audioNode.connect(analyser); // Connects the audio context source to the analyser
    analyser.connect(context.destination); // End destination of an audio graph in a given context
    analyser.fftSize = 16384;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    const barWidth = (WIDTH / bufferLength) * 40;

    let barHeight;
    let x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame); // Takes callback function to invoke before rendering

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "rgba(0,0,0,0.1)"; // Clears canvas before rendering bars (black with opacity 0.2)
      ctx.fillRect(0, 0, WIDTH, HEIGHT); // Fade effect, set opacity to 1 for sharper rendering of bars

      let r, g, b, a;
      let bars = 120 // Set total number of bars you want per frame

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

      for (let i = 0; i < bars; i++) {
        barHeight = (dataArray[i] * 2.5);
        const barHeightMax = 255 * 2.5;
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

        a = (barHeight / barHeightMax) ** 3;

        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillRect(x, (HEIGHT - barHeight), barWidth, barHeight);

        x += barWidth + 10 // Gives 10px space between each bar
      }
    }

    audio.play();
    renderFrame();

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
      <div className={classes.titleBar}>
        <Fab href="/" className={classes.button}>
          <Typography>
            {"< back to home"}
          </Typography>
        </Fab>
        <Typography className={classes.title}>
          Load a Song to Visualize
        </Typography>
        <button onClick={handleReload} className={classes.button}>
          <Typography>
            Reset
          </Typography>
        </button>
      </div>

      <canvas ref={canvasRef} id="canvas" width="300" height="300" className={classes.canvas}></canvas>
      <audio ref={audioRef} id="audio" controls className={classes.audio} crossOrigin="anonymous"></audio>
      {!uploadFileSelected && !loadUrlSelected &&
        <div className={classes.buttonBar}>
          <button id="upload-file" onClick={() => setUploadFileSelected(true)} className={classes.loadOptionButton}>
            <Typography>
              Upload a file from your computer
            </Typography>
          </button>
          <button id="load-url" onClick={() => setLoadUrlSelected(true)} className={classes.loadOptionButton}>
            <Typography>
              Enter the URL of an audio file
            </Typography>
          </button>
        </div>
      }
      {uploadFileSelected &&
        <input ref={fileRef} type="file" id="file-input" accept="audio/*,video/*,image/*" className={classes.fileInput} onChange={loadMusicFile}/>
      }
      {loadUrlSelected &&
        <>
          <input type="text" id="text-input" value={url} onChange={event => setUrl(event.target.value)} className={classes.urlInput} />
          <button id="load-button" onClick={loadMusicFile} disabled={!url} className={classes.urlButton}>Load</button>
        </>
      }
    </div>
  )
}

export default withStyles(styles)(UploadVisualization)
