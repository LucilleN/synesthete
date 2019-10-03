import React, { useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './App.css'

import AppHeader from './AppHeader'
import SearchForm from './SearchForm'

import Homepage from './pages/Homepage'

import { apiHost } from './api'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#c23063', // magenta
      main: '#180142' // dark purple
    },
    type: 'dark',
    dark: {
      pink: '#c23063',
      purple: '#180142',
    },
    medium: {
      purple: '#5a0b66',
    },
    light: {
      pink: '#db91aa',
      purple: '#ac91db'
    },
    white: '#FFFFFF',
  },
  typography: {
    fontFamily: ['Dosis', 'Roboto', 'Open Sans', 'IBM Plex Sans', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',')
  }
})

const App = () => {
  // Because App is the "uppermost" component (see index.js), code in the useEffect function
  // is equivalent to an overall initialization routine. Note however that every component
  // can have its own useEffect, and so initialization can be separated on a per-component
  // basis.
  useEffect(() => apiHost('http://api.giphy.com/v1/'))

  // When React components are implemented as functions, their return value is the component’s
  // content (i.e., what the render() method returns for class-based components).
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        {/*
        <AppHeader />
        <SearchForm />
        */}
        <Homepage />
      </MuiThemeProvider>
    </div>
  )
}

export default App
