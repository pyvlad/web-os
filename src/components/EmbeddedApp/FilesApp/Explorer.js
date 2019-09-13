import React from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/FolderOpen'
import PictureAsPdf from '@material-ui/icons/PictureAsPdf'
import Attachment from '@material-ui/icons/Attachment'


const ExplorerDumb = (props) => {
  const {
    files,
    handleFileSelect
  } = props

  return (
    <React.Fragment>
      <Typography variant="h4" component="h2">
        Explorer
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


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.API = props.API
    this.state = {
      folderId: null,
      folder: {},
      files: []
    }
  }

  updateData = () => {
    const folderId = this.props.folderId

    let promise = Promise.all([
      this.API.getFolderById(folderId),
      this.API.getFilesByFolderId(folderId)
    ])

    promise
      .then(([folder, files]) => this.setState({
        folder: folder,
        files: files
    }))
  }

  componentDidMount() {
    this.updateData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.folderId !== prevProps.folderId) {
      this.updateData()
    }
  }

  render() {
    const { handleFileSelect } = this.props

    return <ExplorerDumb
      files={this.state.files}
      handleFileSelect={handleFileSelect}
    />
  }
}