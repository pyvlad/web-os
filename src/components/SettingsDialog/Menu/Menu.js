import React from 'react'
import {
  ListItemText,
  ListItem,
  List,
  Divider
} from '@material-ui/core'


export default (props) => {
  const {handleSelect, bgType, bgColor, bgUrl} = props

  return (
    <List>
      <ListItem button onClick={() => (handleSelect("background"))}>
        <ListItemText 
          primary="Background" 
          secondary={(bgType === "image") ? bgUrl : bgColor} 
        />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Something Else" secondary="" />
      </ListItem>
    </List>
  )
}