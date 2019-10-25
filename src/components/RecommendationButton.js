import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  fab: {
    background: theme.palette.dark.pink,
    color: 'white',
    height: 60,
    width: 250,
    borderRadius: 30,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
    fontSize: '1.5rem',
    textAlign: 'center',
    testTransform: 'none',
    '&:hover': {
       background: theme.palette.white,
       color: theme.palette.dark.pink
    },
  },
  text: {
    testTransform: 'none'
  }
})

const RecommendationButton = props => {
  const { classes, handleClick } = props //TODO: change to currentSong rather than just ID, we want whole object

  return (
    <Fab variant="extended" color="primary" aria-label="Get Recommendation" href="/visualization" className={classes.fab} onClick={handleClick}> {/*href="/search"*/}
      <Typography className={classes.text}>
        get a visually similar song
      </Typography>
    </Fab>
  )
}

RecommendationButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecommendationButton)
