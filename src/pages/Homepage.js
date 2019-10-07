import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import StartButton from '../components/StartButton'

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    background: `linear-gradient(0deg, ${theme.palette.dark.pink} 0%, ${theme.palette.dark.purple} 70%)`,
    textAlign: 'center',
  },
  title: {
    fontSize: '10rem',
    fontWeight: 800,
    color: theme.palette.white,
    alignItems: 'center',
    marginBottom: 8
  }
})

const Homepage = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        synesthete
      </Typography>
      <StartButton />
    </div>
  )
}

export default withStyles(styles)(Homepage)
