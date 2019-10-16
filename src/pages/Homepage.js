import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import StartButton from '../components/StartButton'

const styles = theme => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '7rem',
    fontWeight: 800,
    color: theme.palette.white,
    marginTop: '-10px'
  },
  subTitle: {
    fontSize: '3rem',
    fontWeight: 800,
    // color: theme.palette.light.purple,
    color: theme.palette.white,
    opacity: '0.4',
    marginTop: -40,
    marginBottom: 10
  },
  section: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  sectionHeading: {
    fontSize: '2rem',
    fontWeight: 600,
    color: theme.palette.white,
    opacity: '0.6',
    marginBottom: 5
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1 rem',
    color: theme.palette.white,
    opacity: '0.4',
    textAlign: 'center',
    width: '60%',
    marginBottom: 10
  }
})

const Homepage = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        synesthete
      </Typography>
      <Typography className={classes.subTitle}>
        hear in color
      </Typography>
      <div className={classes.section}>
        <Typography className={classes.sectionHeading}>
          what is synesthesia?
        </Typography>
        <Typography className={classes.paragraph}>
          Synesthesia is a neurological phenomenon that allows the senses to overlap. Roughly 4% of people have some form of synesthesia, and others have experienced it under the influence of psychedelic drugs. Chromesthetes in particular have sound-color synesthesia, which means that they hear music as colors. This makes listening to music an especially vibrant experience.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionHeading}>
          what to do
        </Typography>
        <Typography className={classes.paragraph}>
          1, 2, 3
        </Typography>
      </div>
      <StartButton />
    </div>
  )
}

export default withStyles(styles)(Homepage)
