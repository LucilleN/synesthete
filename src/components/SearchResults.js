import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import SearchResultRow from './SearchResultRow'

const styles = theme => ({
  searchResults: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  noResults: {
    display: 'flex',
    marginTop: '1rem',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  message: {
    textAlign: 'center',
    fontSize: '2rem',
    color: theme.palette.dark.pink,
    opacity: 0.4,
    width: '30%'
  }
})

const SearchResults = props => {

  const { classes, results, submitted, onTrackSelect } = props

  if (!submitted) {
    return (
      <div className={classes.noResults}>
        <Typography className={classes.message}>
          Search for a song by title to view results!
        </Typography>
      </div>
    )

  }

  else if (submitted && results.length === 0) {
    return (
      <div className={classes.noResults} id="noResults">
        <Typography className={classes.message}>
          Sorry, there are no songs that match your query
        </Typography>
      </div>
    )
  }

  else {
    return (
      <div className={classes.searchResults} id="searchResults">
        <Grid container id="resultsContainer">
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

}

export default withStyles(styles)(SearchResults)
