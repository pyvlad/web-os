import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  frame: {
    width: "100%",
    height: "100%",
    border: "none"
  }
}))

export default () => {
  const classes = useStyles()

  return <iframe 
    src="https://pyvlad.github.io/mailbox-mui/" 
    title="mail" 
    className={classes.frame}>
  </iframe>
}