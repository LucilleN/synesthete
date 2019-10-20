import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  fab: {
    background: theme.palette.dark.purple,
    color: 'white',
    height: 60,
    width: 240,
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
       color: theme.palette.dark.purple
    },
  },
  text: {
    testTransform: 'none'
  }
})

const StartButton = props => {
  const { classes, href, text } = props
  return (
    <Fab variant="extended" color="primary" aria-label="Start" href={href} className={classes.fab}> {/*href="/search"*/}
      <Typography className={classes.text}>
        {text}
      </Typography>
    </Fab>
  )
}

StartButton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(StartButton)
