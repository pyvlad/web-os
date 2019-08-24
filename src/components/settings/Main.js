import React from 'react'
import { connect } from 'react-redux'
import {
  ListItemText,
  ListItem,
  List,
  Divider
} from '@material-ui/core'


const Main = ({
  handleSelect, 
  bgType,
  bgColor, 
  bgUrl
}) => (
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

const mapStateToProps = (state) => (
  {
    bgType: state.backgroundType,
    bgColor: state.backgroundColor,
    bgUrl: state.backgroundImageUrl
  }
)
export default connect(mapStateToProps)(Main)