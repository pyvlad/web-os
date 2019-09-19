import React from 'react'
import FolderIcon from '@material-ui/icons/FolderOpen'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'
import Attachment from '@material-ui/icons/Attachment'
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'


export default (props) => {
  const {
    files,
    handleFileSelect
  } = props

  return (
    <React.Fragment>
      <Typography variant="h4" component="h2">
        File Explorer
      </Typography>
      <List component="nav">
        {
          files.map(
            ({id, type, name, url}) => (
              <ListItem 
                button 
                key={id} 
                onClick={() => handleFileSelect(id, type, url)}
              >
                <ListItemIcon>
                  { (type === "directory") ? <FolderIcon />
                    : (String(name).indexOf(".pdf") + 1) ? <PictureAsPdf />
                    : <Attachment />
                  }
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            )
          )
        }
      </List>
    </React.Fragment>
  )
}
