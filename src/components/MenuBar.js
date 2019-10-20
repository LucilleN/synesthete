import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  bar: {
    background: theme.palette.dark.pink,
    height: '60px',
    textAlign: 'center',
    // opacity: '0.8',
    zIndex: 10
  },
  button: {
    height: '100%',
    '&:hover': {
       background: theme.palette.light.pink,
    },
  },
  textNotCurrentPage: {
    color: theme.palette.light.pink,
    fontSize: '1.5rem',
    padding: 10,
    '&:hover': {
       color: theme.palette.dark.purple
    },
  },
  // textCurrentPage: {
  //   color: theme.palette.light.pink,
  //   '&:hover': {
  //      color: theme.palette.dark.purple
  //   },
  // },
  logo: {
    color: theme.palette.white,
    display: 'flex',
    fontSize: '2.25rem',
    paddingLeft: 20,
  }
})

const MenuBar = props => {
  const [homeSelected, setHomeSelected] = useState(false)
  const [searchSelected, setSearchSelected] = useState(false)
  const [uploadSelected, setUploadSelected] = useState(false)
  const [aboutSelected, setAboutSelected] = useState(false)

  const handleHomeSelect = event => {
    // console.log("handleHomeSelect called")
    // event.preventDefault()
    setHomeSelected(true)
    // console.log(`homeSelected is ${homeSelected}`)
  }

  const handleSearchSelect = event => {
    setSearchSelected(true)
  }

  const handleUploadSelect = event => {
    setUploadSelected(true)
  }

  const handleAboutSelect = event => {
    setAboutSelected(true)
  }

  useEffect(() => {
    setHomeSelected(false)
    setSearchSelected(false)
    setUploadSelected(false)
    setAboutSelected(false)
  })

  const { classes } = props


  return (
    <div>
      <Grid container className={classes.bar}>
        <Grid item xs={3} onClick={handleHomeSelect}>
          <Typography className={classes.logo}>
            synesthete
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.button} onClick={handleHomeSelect}>
          <Typography className={classes.textNotCurrentPage}>
            home
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.button} onClick={handleSearchSelect}>
          <Typography className={classes.textNotCurrentPage}>
            search
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.button} onClick={handleUploadSelect}>
          <Typography className={classes.textNotCurrentPage}>
            upload
          </Typography>
        </Grid>
        <Grid item xs={2} className={classes.button} onClick={handleAboutSelect}>
          <Typography className={classes.textNotCurrentPage}>
            about
          </Typography>
        </Grid>
      </Grid>
      {homeSelected &&
        <Redirect to={'/'} />
      }
      {searchSelected &&
        <Redirect to={'/search'} />
      }
      {uploadSelected &&
        <Redirect to={'/upload'} />
      }
      {aboutSelected &&
        <Redirect to={'/about'} />
      }
    </div>
  )
}

export default withStyles(styles)(MenuBar)
