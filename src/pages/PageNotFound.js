import React from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import StartButton from '../components/StartButton'

const styles = theme => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.palette.light.pink,
    fontSize: '5rem',
    textAlign: 'center',
    marginTop: '30vh',
    opacity: 0.8,
  },
})

const PageNotFound = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography className={classes.title} id="title">
        page not found
      </Typography>
      <StartButton href="/" text="back to home" />
    </div>
  )
}

export default withStyles(styles)(PageNotFound)
