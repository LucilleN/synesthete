import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  bar: {
    background: theme.palette.dark.pink,
    height: '60px',
    textAlign: 'center',
    // opacity: '0.8'
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

  const { classes } = props

  return (
    <Grid container xs={12} className={classes.bar}>
      <Grid item xs={3}>
        <Typography className={classes.logo}>
          synesthete
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.button}>
        <Typography className={classes.textNotCurrentPage}>
          home
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.button}>
        <Typography className={classes.textNotCurrentPage}>
          search
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.button}>
        <Typography className={classes.textNotCurrentPage}>
          upload
        </Typography>
      </Grid>
      <Grid item xs={2} className={classes.button}>
        <Typography className={classes.textNotCurrentPage}>
          about
        </Typography>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(MenuBar)
