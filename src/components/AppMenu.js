import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Drawer,
  Button,
  Divider,
  Icon,
  Typography
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  menu: {
    width: 250
  },
  header: {
    padding: theme.spacing(1, 2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  }
}))


export default (props) => {
  const { children } = props
  const classes = useStyles()

  const [state, setState] = React.useState({ isOpen: false })
  const toggleDrawer = (isOpen) => event => {
    if (event.type === 'keydown' 
        && (event.key === 'Tab' || event.key === 'Shift')
    ) { 
      return 
    }
    setState({ isOpen: isOpen })
  }
  
  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>
        <Icon>dehaze</Icon>
      </Button>
      <Drawer open={state.isOpen} onClose={toggleDrawer(false)}>
        <div className={classes.header}>
          <Typography variant="h4">
            Menu
          </Typography>
        </div>
        <Divider />
        <div
          className={classes.menu}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          { children }
        </div>
      </Drawer>
    </React.Fragment>
  )
}