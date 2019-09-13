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
    src={process.env.PUBLIC_URL + "/#/files/"} // TODO: how not to hardcode hash tag?
    title="files" 
    className={classes.frame}>
  </iframe>
}