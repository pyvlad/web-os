import React from 'react'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
  windowMobile: {
    position: "absolute",   
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "hidden"
  }
}))


export default (props) => {
  const classes = useStyles()
  const { 
    children,
    zIndex
  } = props

  return (
    <div className={classes.windowMobile} style={{
      zIndex: zIndex
    }}> 
      { children }
    </div>
  )
}