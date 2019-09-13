import React from 'react'
import { connect } from 'react-redux'
import { setIsSettingsMenuOpen } from '../../../actions'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Icon
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import LaunchIcon from '@material-ui/icons/Launch'
import ScheduleIcon from '@material-ui/icons/Schedule'


const mapDispatchToProps = (dispatch) => (
  {
    openSettingsDialog: () => dispatch(setIsSettingsMenuOpen(true))
  }
)

const getWindowName = (() => {
  let counter = 0
  return () => {
    return "Example #" + (++counter)
  }
})()


const AppMenuList = (props) => {
  const { 
    openSettingsDialog,
    handleWindowCreate
  } = props

  return (
    <React.Fragment>
      <List>
        <ListItem button onClick={ openSettingsDialog }>
          <ListItemIcon><Icon>more_vert</Icon></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => handleWindowCreate(getWindowName(), "example")}>
          <ListItemIcon><LaunchIcon /></ListItemIcon>
          <ListItemText primary="Example Window" />
        </ListItem>
        <ListItem button onClick={() => handleWindowCreate("Clock", "clock")}>
          <ListItemIcon><ScheduleIcon /></ListItemIcon>
          <ListItemText primary="Clock" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Files" />
        </ListItem>
        <ListItem button onClick={() => handleWindowCreate("Files (Browser Viewer)", "simple_files")}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Files (Browser Viewer)" />
        </ListItem>
        <ListItem button onClick={() => handleWindowCreate("Mail", "mail")}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
      </List>
    </React.Fragment>
  )
}

export default connect(undefined, mapDispatchToProps)(AppMenuList)