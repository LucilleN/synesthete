import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { Redirect } from 'react-router-dom';

const styles = theme => ({
  row: {
    background: theme.palette.light.pink,
    padding: '4px 16px',
    margin: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  const { classes, songName, song, songID, artistName, onTrackSelect } = props

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    console.log("handleClick called")
    setClicked(true)
  }

  // if (clicked) {
  //   return (
  //     <Redirect to={{
  //         pathname: `/visualization/${songID}`,
  //         state: { trackObject: song }
  //       }}
  //     />
  //   )
  // }
  if (!clicked) {
    return (
      <Grid item xs={12} id={songID} className={classes.row} onClick={handleClick}> 
        <Typography id={songID} className={classes.text}>
          "{songName}," Artist: {artistName}
        </Typography>
        <Typography>
          {">>> Visualize This Sample >>>"}
        </Typography>
      </Grid>
    )
  }
  else {
    return (
      <Redirect to={{
          pathname: `/visualization/${songID}`,
          state: { trackObject: song }
        }}
      />
    )
  }

}

export default withStyles(styles)(SearchResultRow)
