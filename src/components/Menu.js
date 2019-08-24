import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Icon,
  Typography
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import SettingsDialog from './settings/SettingsDialog'


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


export default () => {
  const classes = useStyles()

  // drawer
  const [state, setState] = React.useState({ isOpen: false })
  const toggleDrawer = (isOpen) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ isOpen: isOpen })
  }

  // settings
  const [isSettingsMenuOpen, setSettingsMenuOpen] = React.useState(false)
  function handleSettingsMenuOpen() {
    setSettingsMenuOpen(true)
  }
  function handleSettingsMenuClose() {
    setSettingsMenuOpen(false)
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
          <List>
            <ListItem button onClick={handleSettingsMenuOpen}>
              <ListItemIcon><Icon>more_vert</Icon></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Files" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Mail" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <SettingsDialog 
        isOpen={isSettingsMenuOpen} 
        handleClose={handleSettingsMenuClose}
      />
    </React.Fragment>
  )
}