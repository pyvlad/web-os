import React from 'react'
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


export default (props) => {

  return (
    <React.Fragment>
      <List>
        <ListItem button onClick={props.openSettingsDialog}>
          <ListItemIcon><Icon>more_vert</Icon></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={props.openExampleWindow}>
          <ListItemIcon><LaunchIcon /></ListItemIcon>
          <ListItemText primary="Example Window" />
        </ListItem>
        <ListItem button onClick={props.openClockWindow}>
          <ListItemIcon><ScheduleIcon /></ListItemIcon>
          <ListItemText primary="Clock App" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Files" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
      </List>
    </React.Fragment>
  )
}