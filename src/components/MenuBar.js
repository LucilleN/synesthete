import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { NavLink } from 'react-router-dom'

const styles = theme => ({
  bar: {
    background: theme.palette.dark.pink,
    height: '60px',
    textAlign: 'center',
    zIndex: 10,
  },
  button: {
    height: '100%',
    '&:hover': {
      background: theme.palette.light.pink,
    },
  },
  text: {
    fontSize: '1.625rem',
    padding: 10,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.dark.purple,
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.light.pink,
  },
  logo: {
    color: theme.palette.white,
    display: 'flex',
    fontSize: '2.25rem',
    paddingLeft: 20,
  },
})

const MenuBar = props => {
  const { classes } = props

  return (
    <div>
      <Grid container className={classes.bar} id="bar">
        <Grid item xs={3} id="logo">
          <NavLink to="/" className={classes.link}>
            <Typography className={classes.logo}>
              synesthete ♬
            </Typography>
          </NavLink>
        </Grid>
        <Grid item xs={2} className={classes.button} id="home">
          <NavLink to="/" className={classes.link}>
            <Typography className={classes.text}>
              home
            </Typography>
          </NavLink>
        </Grid>
        <Grid item xs={2} className={classes.button} id="search">
          <NavLink to="/search" className={classes.link}>
            <Typography className={classes.text}>
              search
            </Typography>
          </NavLink>
        </Grid>
        <Grid item xs={2} className={classes.button} id="upload">
          <NavLink to="/upload" className={classes.link}>
            <Typography className={classes.text}>
              upload
            </Typography>
          </NavLink>
        </Grid>
        <Grid item xs={2} className={classes.button} id="about">
          <NavLink to="/about" className={classes.link}>
            <Typography className={classes.text}>
              about
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(MenuBar)
