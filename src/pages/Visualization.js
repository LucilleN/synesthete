import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    background: 'black'
  },
  fileInput: {
    position: 'fixed',
    top: '10px',
    left: '10px',
    zIndex: 3
  },
  canvas: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%'
  },
  audio:{
    position: 'fixed',
    left: '10px',
    bottom: '10px',
    width: 'calc(100%-25px)',
    zIndex: 3
  },
  name: {
    position: 'absolute',
    top: '0px',
    right: '20px',
    zIndex: 3,
    color: '#eeeeee',
    fontFamily: 'monospace'
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    background: 'linear-gradient(transparent, #00035f, transparent)',
    backgroundSize: '100% 7px',
    animation: 'bg 1s infinite linear',
    zIndex: 2,
    opacity: 0.3
  },
  '@keyframes bg': {
    from: { backgroundPosition: '0 0' },
    to: { backgroundPosition: '8px 8px' }
  }
})

const Visualization = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography>
        Visualization Page
      </Typography>
      <input type="file" id="file-input" accept="audio/*,video/*,image/*" className={classes.fileInput}/>
      <canvas id="canvas" width="300" height="300" className={classes.canvas}></canvas>
      <h3 id="name" className={classes.name}></h3>
      <audio id="audio" controls className={classes.audio}></audio>
      <div id="background" className={classes.background}></div>
      <script src="../../test_visualization/script.js"></script>
    </div>
  )
}

export default withStyles(styles)(Visualization)
