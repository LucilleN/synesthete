import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

const styles = theme => ({
  fab: {
    background: theme.palette.dark.purple,
    color: 'white',
    height: 60,
    width: 200,
    borderRadius: 30,
    margin: '0 auto',
    fontSize: '1.125rem',
    textAlign: 'center'
  }
})

const StartButton = props => {
  const { classes } = props
  return (
    <Fab variant="extended" color="primary" aria-label="Start" className={classes.fab}> {/*href="/search"*/} 
      Start
    </Fab>
  )
}

StartButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StartButton)
