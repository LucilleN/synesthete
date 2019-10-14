import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import SearchResultRow from './components/SearchResultRow'

const styles = theme => ({
  searchResults: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem'
  }
})

const SearchResults = props => {

  const { classes, results, onTrackSelect } = props

  return (
    <div className={classes.searchResults}>
      <Grid container>
        {results.map(song => (
          <SearchResultRow
            key={song.id}
            songName={song.name}
            songID={song.id}
            artistName={song.artists[0].name}
            onTrackSelect={onTrackSelect}
          />
        ))}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(SearchResults)
