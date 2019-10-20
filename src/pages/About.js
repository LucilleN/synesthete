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
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'auto',
    maxHeight: 'calc(100% - 60px)',
    minHeight: 'calc(100% - 60px)',
    paddingBottom: 10
  },
  title: {
    color: theme.palette.light.pink,
    // padding: 5,
    fontSize: '3rem',
    textAlign: 'center'
  },
  section: {
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10
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

const About = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>
        about
      </Typography>
      <div className={classes.section}>
        <Typography className={classes.sectionHeading}>
          synesthesia, chromesthesia, and synesthete
        </Typography>
        <Typography className={classes.paragraph}>
          Synesthesia is a neurological phenomenon that allows the senses to overlap.
          Roughly 4% of people have some form of synesthesia, and others have experienced it under the influence of psychedelic drugs.
          Chromesthetes in particular have sound-color synesthesia, which means that they hear music as colors.
          This makes listening to music an especially vibrant experience.
        </Typography>
        <Typography className={classes.paragraph}>
          Many famous people, both past and present, have had this phenomenon, including Pythagoras, Isaac Newton, George Field, Alexander Scriabin, Duke Ellington, Pharrell Williams, Stevie Wonder, and Kanye West.
          Synesthesia is, unsurprisingly, up to 7 times more common in artists and musicians, and many of them use their synesthesia in developing their artwork.
          However, synesthesia is different for everyone.
          Synesthetes can have any crossover of the senses -- sight, sound, smell, taste, and touch -- and can involve more than just two.
        </Typography>
        <Typography className={classes.paragraph}>
          When it comes to chromesthesia (sounds to colors), people's perceptions of the colors of music vary, too.
          Many chromesthetes see the same fixed hue for each note -- red for C and blue for G, for example.
          For others, the color spectrum is transposed.
        </Typography>
        <Typography className={classes.paragraph}>
          In Synesthete, each song has the full color spectrum, but the rainbow is offset based on the song's key.
          Other aspects of the song, such as its tempo, valence, and acousticness, affect other aspects of the visualization.
          It's not possible to simulate exactly what chromesthesia is like, but this is our closest bet -- so grab a pair of headphones and start hearing music in color!
        </Typography>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionHeading}>
          the creator
        </Typography>
        <Typography className={classes.paragraph}>
          Synesthete was created by Lucille Njoo for CMSI 370.
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(About)
