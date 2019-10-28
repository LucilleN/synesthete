import React, { useState, useRef } from 'react'

import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './Visualization'
import { loadMusic } from './visualizationUtilities'
import ErrorDialog from '../components/ErrorDialog'

const UploadVisualization = props => {
  const { classes } = props

  const audioRef = useRef(null)
  const canvasRef = useRef(null)
  const fileRef = useRef(null)

  const [url, setUrl] = useState('')
  const [uploadFileSelected, setUploadFileSelected] = useState(false)
  const [loadUrlSelected, setLoadUrlSelected] = useState(false)

  const [error, setError] = useState(null)

  const [existingAudioNode, setAudioNode] = useState(null)
  const [existingAnalyser, setAnalyser] = useState(null)
  const [existingContext, setContext] = useState(null)

  const handleReload = () => {
    window.location.reload(false)
  }

  const handleLoadButtonClick = () => {
    loadMusic({
      audioRef,
      canvasRef,
      srcUrl: url,
      existingContext,
      setContext,
      existingAudioNode,
      setAudioNode,
      existingAnalyser,
      setAnalyser,
      setError
    })
  }

  const handleFileChange = () => {
    loadMusic({
      audioRef,
      canvasRef,
      fileRef,
      existingContext,
      setContext,
      existingAudioNode,
      setAudioNode,
      existingAnalyser,
      setAnalyser,
      setError
    })
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
            reset
          </Typography>
        </button>
      </div>
      <canvas ref={canvasRef} id="canvas" width="300" height="300" className={classes.canvas}></canvas>
      <audio ref={audioRef} id="audio" controls className={classes.audio} crossOrigin="anonymous"></audio>
      {!uploadFileSelected && !loadUrlSelected &&
        <div className={classes.buttonBar}>
          <button id="upload-file" onClick={() => setUploadFileSelected(true)} className={classes.loadOptionButton}>
            <Typography>
              upload a file from your computer
            </Typography>
          </button>
          <button id="load-url" onClick={() => setLoadUrlSelected(true)} className={classes.loadOptionButton}>
            <Typography>
              enter the URL of an audio file
            </Typography>
          </button>
        </div>
      }
      {uploadFileSelected && (
        <input ref={fileRef} type="file" id="file-input" accept="audio/*,video/*,image/*" className={classes.fileInput} onChange={handleFileChange}/>
      )}
      {loadUrlSelected && (
        <>
          <input type="text" id="text-input" value={url} onChange={event => setUrl(event.target.value)} className={classes.urlInput} />
          <button id="load-button" onClick={handleLoadButtonClick} disabled={!url} className={classes.urlButton}>Load</button>
        </>
      )}
      {error && (
        <div id="error">
          <ErrorDialog error={error} errorSubtitle={"Try refreshing the page or starting a new search."}/>
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(UploadVisualization)
