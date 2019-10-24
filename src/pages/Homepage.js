import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import StartButton from '../components/StartButton'

const styles = theme => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
    // overflow: 'auto',
    // maxHeight: 'calc(100% - 60px)',
    // minHeight: 'calc(100% - 60px)'
  },
  title: {
    fontSize: '6rem',
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
    opacity: '0.7',
    marginBottom: 5
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1 rem',
    color: theme.palette.white,
    opacity: '0.6',
    textAlign: 'center',
    width: '60%',
    marginBottom: 10
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row'
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
          Synesthesia is a neurological phenomenon that allows the senses to overlap.
          Chromesthetes have sound-color synesthesia, which means that they naturally hear music as colors.
          This makes listening to music an especially vibrant experience, and helps a lot of artists create music.<br></br>
          Synesthete aims to simulate the experience of chromesthesia by pairing music with colors in realtime.
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionHeading}>
          what to do
        </Typography>
        <Typography className={classes.paragraph}>
          Either search for a song to watch its chromesthesia visualization for a 30-second sample, or upload your own audio file to see it get visualized!
        </Typography>
      </div>
      <div className={classes.buttonRow}>
        <StartButton href="/search" text="search song samples"/>
        <StartButton href="/upload" text="upload a file"/>
      </div>
    </div>
  )
}

export default withStyles(styles)(Homepage)
