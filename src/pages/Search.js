import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom';

import SearchResults from '../components/SearchResults'

import { searchSongs } from '../api'

const styles = theme => ({
  title: {
    color: theme.palette.light.pink,
    padding: 5,
    fontSize: '3rem',
    textAlign: 'center'
  },
  searchForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchField: {
    width: '50%',
    height: '1.5rem',
    marginBottom: 10
  },
  buttonEnabled: {
    color: theme.palette.white,
    fontSize: '1rem',
    background: theme.palette.dark.pink,
    height: '50px',
    width: '150px',
    borderRadius: '30px',
    border: 'none',
    margin: 5
  },
  buttonDisabled: {
    color: theme.palette.white,
    fontSize: '1rem',
    background: theme.palette.dark.pink,
    height: '50px',
    width: '150px',
    borderRadius: '30px',
    border: 'none',
    margin: 5,
    opacity: '0.3'
  }
})

const SearchForm = (props) => {

  const { classes } = props

  const [error, setError] = useState(null) // so it's const even though error can change?
  const [query, setQuery] = useState('')
  const [songs, setSongs] = useState([])
  const [songSelected, setSongSelected] = useState(false)
  const [songID, setSongID] = useState(null)

  const handleQueryChange = event => setQuery(event.target.value)

  const performQuery = async event => {
    event.preventDefault() // why?

    setError(null) // why?

    try {
      const result = await searchSongs({
        // rating: 'pg-13',
        q: query
      })

      setSongs(result.tracks.items)
    } catch (error) {
      setError('Sorry, but something went wrong.')
    }
  }

  const handleTrackSelect = (event) => {
    // do api stuff
    console.log(`CALLED HANDLE TRACK SELECT: selected track id ${event.target.id}`)
    setSongSelected(true)
    setSongID(event.target.id)
  }

  if (!songSelected) {

    return (
      <form className={classes.searchForm} onSubmit={performQuery}>
        <Typography className={classes.title}>
          search
        </Typography>

        <input name="query" type="text" value={query} onChange={handleQueryChange} className={classes.searchField}/>

        <div className="ButtonBar">
          <button type="submit" disabled={!query} className={query ? classes.buttonEnabled : classes.buttonDisabled}>
            search tracks
          </button>
        </div>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <Grid container xs={10}>
          <SearchResults results={songs} onTrackSelect={handleTrackSelect}/>
        </Grid>

      </form>
    )
  }
  else {
    return (
      <Redirect to={`/visualization/${songID}`} />
    )
  }
}

export default withStyles(styles)(SearchForm)
