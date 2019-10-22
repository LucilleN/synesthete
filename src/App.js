import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Search from './pages/Search'
import UploadVisualization from './pages/UploadVisualization'
import Visualization from './pages/Visualization'
import MenuBar from './components/MenuBar'

import { apiHost } from './api'

export const theme = createMuiTheme({
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
    // height: '100vh',
    height: '100%',
    minHeight: '100vh',
    background: `linear-gradient(0deg, ${theme.palette.dark.pink} -25%, ${theme.palette.dark.purple} 80%)`
  }
})

const routes = (
  <Router>
    <div>
      {/* <Switch>
        <Route exact path="*" component={MenuBar}/>
      <Switch> */}
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/upload" component={UploadVisualization} />
        <Route exact path="/visualization" component={Visualization} />
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
