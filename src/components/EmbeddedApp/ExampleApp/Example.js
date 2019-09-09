import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: "100%"
  },
  header: {
    flex: 0,
    backgroundColor: theme.palette.grey[900],
    color: "white",
    padding: theme.spacing(2),
    margin: 0
  },
  content: {
    flex: 1,
    backgroundColor: theme.palette.grey[800],
    color: "white",
    padding: theme.spacing(2),
    margin: 0
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography 
        variant="h4"
        className={classes.header}>
          Hello, window!
      </Typography>
      <Typography 
          className={classes.content}>
        Created/re-rendered at {new Date().toLocaleTimeString()}...
      </Typography>
    </div>
  )
}