import React from 'react'
import ExplorerDumb from './ExplorerDumb'


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