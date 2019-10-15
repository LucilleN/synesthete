import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  row: {
    background: theme.palette.light.pink,
    padding: 4,
    margin: 2,
    '&:hover': {
       background: theme.palette.white,
    },
  },
  text: {
    color: theme.palette.dark.purple,
    '&:hover': {
       color: theme.palette.dark.purple
    },
  }
})

const SearchResultRow = props => {

  const { classes, songName, songID, artistName, onTrackSelect } = props

  return (
    <Grid item xs={12} id={songID} className={classes.row} onClick={onTrackSelect}>
      <Typography id={songID} className={classes.text}>
        "{songName}," Artist: {artistName}
      </Typography>
    </Grid>
  )
}

export default withStyles(styles)(SearchResultRow)
