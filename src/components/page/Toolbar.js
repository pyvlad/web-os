import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import Menu from './Menu'
import Clock from './Clock'


const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: "#aaf",
    display: "flex",
    justifyContent: "space-between"
  }
}))


export default (props) => {
  const { handleWindowCreate } = props
  const classes = useStyles()

  return (
    <Toolbar className={classes.toolbar}>
      <Menu />
      <Button onClick={() => handleWindowCreate("New Window")}>
        <Typography variant="subtitle2">
          New Window
        </Typography>
      </Button>
      <Typography variant="subtitle2">
        <Clock />
      </Typography>
    </Toolbar>
  )
}
