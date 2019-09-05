import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import Menu from '../Menu'
import Clock from '../Clock'


const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "space-between"
  }
}))


export default (props) => {
  const { handleWindowCreate } = props
  const classes = useStyles()
  const windowContent = (
    <div style={{backgroundColor: "pink"}}>
      Hello, windows!
    </div>
  )

  return (
    <Toolbar className={classes.toolbar}>
      <Menu />
      <Button onClick={() => handleWindowCreate("New Window", windowContent)}>
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
