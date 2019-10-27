import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

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
      main: '#c23063', // magenta
      dark: '#180142' // dark purple
    },
    type: 'dark',
    dark: {
      pink: '#bf265c',
      purple: '#1c004f',
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

export const defaultErrorText = 'Sorry, but something went wrong.'

const styles = () => ({
  root: {
    width: '100vw',
    height: '100%',
    minHeight: '100vh',
    background: `linear-gradient(0deg, ${theme.palette.dark.pink} 0%, ${theme.palette.dark.purple} 80%)`
  }
})

const routes = (
  <Router>
    <div>
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
)

const App = (props) => {

  useEffect(() => apiHost('https://api.spotify.com/v1/'))

  const { classes } = props

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        {routes}
      </MuiThemeProvider>
    </div>
  )
}

export default withStyles(styles)(App)
