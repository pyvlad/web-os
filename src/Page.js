import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  Toolbar,
  Typography
} from '@material-ui/core'
import Menu from './Menu'
import Clock from './Clock'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    backgroundColor: "#ddd"
  },
  toolbar: {
    flex: 0,
    backgroundColor: "#aaa",
    display: "flex",
    justifyContent: "space-between"
  }
}))


export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Typography variant="h1">
          Web OS
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <Menu />
        <Typography variant="h4">
          Toolbar
        </Typography>
        <Typography variant="subtitle2">
          <Clock />
        </Typography>
      </Toolbar>
    </div>
  )
}
