import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Toolbar } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "space-between"
  }
}))


export default (props) => {
  const { children } = props
  const classes = useStyles()
  
  return (
    <Toolbar className={classes.toolbar}>
      { children }
    </Toolbar>
  )
}
