import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'

import './App.css'

import AppHeader from './AppHeader'
import SearchForm from './SearchForm'

import Homepage from './pages/Homepage'
import Search from './pages/Search'
import Visualization from './pages/Visualization'

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
      purple: '#10002e',
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
    fontFamily: ['Dosis', 'Roboto', 'Open Sans', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',')
  }
})

const styles = () => ({
  root: {
    width: '100vw',
    height: '100vh',
    // background: `linear-gradient(0deg, ${theme.palette.dark.pink} 0%, ${theme.palette.dark.purple} 70%)`
    background: `linear-gradient(0deg, ${theme.palette.dark.pink} -25%, ${theme.palette.dark.purple} 80%)`
  }
})

const routes = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/visualization/:songID" component={Visualization} />
      </Switch>
    </div>
  </Router>
);
// TODO: Add a Page Not Found
// <Route exact path="*" component={NotFound} />


const App = (props) => {
  // Because App is the "uppermost" component (see index.js), code in the useEffect function
  // is equivalent to an overall initialization routine. Note however that every component
  // can have its own useEffect, and so initialization can be separated on a per-component
  // basis.
  useEffect(() => apiHost('http://api.giphy.com/v1/'))

  const { classes } = props

  return (
    <div className={classes.root}>
      <style>@import url('https://fonts.googleapis.com/css?family=Dosis&display=swap');</style>
      <MuiThemeProvider theme={theme}>
        {/*
        <AppHeader />
        <SearchForm />
        */}
        {routes}
      </MuiThemeProvider>
    </div>
  )
}

export default withStyles(styles)(App)
