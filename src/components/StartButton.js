import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  fab: {
    background: theme.palette.dark.purple,
    color: 'white',
    height: 50,
    width: 150,
    borderRadius: 30,
    margin: '0 auto',
    fontSize: '1.5rem',
    textAlign: 'center',
    testTransform: 'none'
  },
  text: {
    testTransform: 'none'
  }
})

const StartButton = props => {
  const { classes } = props
  return (
    <Fab variant="extended" color="primary" aria-label="Start" href="/search" className={classes.fab}> {/*href="/search"*/}
      <Typography className={classes.text}>
        start
      </Typography>
    </Fab>
  )
}

StartButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StartButton)
