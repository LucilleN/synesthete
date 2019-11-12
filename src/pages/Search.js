import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import SearchResults from '../components/SearchResults'
import ErrorDialog from '../components/ErrorDialog'

import { defaultErrorText } from '../App'
import { searchSongs } from '../api'

const styles = theme => ({
  title: {
    color: theme.palette.light.pink,
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
    }
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
    }
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
    width: '80vw',
    marginTop: 10,
    marginBottom: 20,
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

  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [songs, setSongs] = useState([])

  const [showDefaultText, setShowDefaultText] = useState(true)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleQueryChange = event => setQuery(event.target.value)
  const handleFocus = event => {
    setShowDefaultText(false)
  }
  const handleFocusOut = event => {
    if (query === "") {
      setShowDefaultText(true)
    }
  }

  const performQuery = async event => {
    event.preventDefault()

    setError(null)

    try {
      console.log("search query", query)

      const result = await searchSongs({
        q: query,
        type: 'track'
      })

      console.log("search result", result)

      setSongs(result.tracks.items)
      console.log("GOT HERE")

      setFormSubmitted(true)
    } catch (error) {
      setError(defaultErrorText)
    }
  }

  return (
    <form className={classes.searchForm} onSubmit={performQuery}>
      <Typography className={classes.title}>
        search
      </Typography>
      <Grid container justify="center" className={classes.searchBar}>
        <input name="query" type="text" value={showDefaultText ? defaultText : query} onChange={handleQueryChange} className={classes.searchField} onFocus={handleFocus} onBlur={handleFocusOut}/>
        <button type="submit" disabled={!query} className={query ? classes.buttonEnabled : classes.buttonDisabled}>
          <Typography>
            search tracks
          </Typography>
        </button>
      </Grid>
      {error && (
        <div id="error">
          <ErrorDialog error={error} errorSubtitle={"Try refreshing the page and starting a new search."}/>
        </div>
      )}
      <Grid container className={classes.resultsContainer}>
        <SearchResults results={songs} submitted={formSubmitted}/>
      </Grid>
    </form>
  )
}

export default withStyles(styles)(SearchForm)
