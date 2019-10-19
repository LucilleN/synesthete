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
    // padding: 5,
    fontSize: '3rem',
    textAlign: 'center'
  },
  searchForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: '-15px'
  },
  searchField: {
    width: '50%',
    height: '1.5rem',
    color: theme.palette.light.pink,
    fontSize: '1.125rem',
    '&:focus': {
      outline: 'none',
      border: `2px solid ${theme.palette.dark.pink}`,
      color: theme.palette.dark.pink
    },
  },
  buttonEnabled: {
    color: theme.palette.white,
    fontSize: '1rem',
    background: theme.palette.dark.pink,
    height: '40px',
    width: '150px',
    borderRadius: '30px',
    border: 'none',
    margin: 15,
    '&:hover': {
       background: theme.palette.white,
       color: theme.palette.dark.pink
    },
  },
  buttonDisabled: {
    color: theme.palette.white,
    fontSize: '1rem',
    background: theme.palette.dark.pink,
    height: '40px',
    width: '150px',
    borderRadius: '30px',
    border: 'none',
    margin: 15,
    opacity: '0.3'
  },
  resultsContainer: {
    maxHeight: '65vh',
    minHeight: '65vh',
    overflow: 'auto',
    marginTop: 10,
    padding: '0px 15px 15px',
    background: theme.palette.dark.purple,
    '&::-webkit-scrollbar': {
      width: '1em',
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
      backgroundColor: theme.palette.dark.pink,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.white,
    }
  }
})

const SearchForm = (props) => {

  const { classes } = props
  const defaultText = 'search for a song'

  const [error, setError] = useState(null) // so it's const even though error can change?
  const [query, setQuery] = useState('')
  const [songs, setSongs] = useState([])
  const [songSelected, setSongSelected] = useState(false)
  const [songID, setSongID] = useState(null)
  const [showDefaultText, setShowDefaultText] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleQueryChange = event => setQuery(event.target.value)
  const handleFocus = event => {
    setShowDefaultText(false)
  }
  const handleFocusOut = event => {
    console.log("handleFocusOut")
    if (query === "") {
      setShowDefaultText(true)
    }
  }

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

  const handleFormSubmit = event => {
    setFormSubmitted(true)
  }

  const handleTrackSelect = async event => {
    // do api stuff
    console.log(`CALLED HANDLE TRACK SELECT: selected track id ${event.target.id}`)
    setSongSelected(true)
    setSongID(event.target.id)

    // put a try catch here
  }

  if (!songSelected) {
    // put whole thing in a Grid with justify="flex-end"
    return (
      <form className={classes.searchForm} onSubmit={performQuery}>
        <Typography className={classes.title}>
          search
        </Typography>

        <Grid container justify="center" className={classes.searchBar}>
          <input name="query" type="text" value={showDefaultText ? defaultText : query} onChange={handleQueryChange} className={classes.searchField} onFocus={handleFocus} onBlur={handleFocusOut}/>
          <button type="submit" disabled={!query} className={query ? classes.buttonEnabled : classes.buttonDisabled} onClick={handleFormSubmit}>
            <Typography>
              search tracks
            </Typography>
          </button>
        </Grid>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <Grid container xs={10} className={classes.resultsContainer}>
          <SearchResults results={songs} onTrackSelect={handleTrackSelect} submitted={formSubmitted}/>
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
