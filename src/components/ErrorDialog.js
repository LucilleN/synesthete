import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  title: {
    color: theme.palette.dark.pink,
  },
})

const ErrorDialog = props => {
  const { error, errorSubtitle, classes } = props

  const [open, setOpen] = useState(true)

  useEffect(() => {
    setOpen(true)
  }, [])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="error-title"
        aria-describedby="error-subtitle"
        id="error-dialog"
      >
        <DialogTitle id="error-title" className={classes.title}>{error}</DialogTitle>
        <DialogContent>
          <DialogContentText id="error-subtitle">
            {errorSubtitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" id="close-button">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withStyles(styles)(ErrorDialog)
