import React from 'react'
import AppDumb from './AppDumb'
import apiService from './apiService'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      folderId: 1,
      fileUrl: null
    }
    this.API = new apiService()
    this.handleFileSelect = this.handleFileSelect.bind(this)
  }

  handleFileSelect(id, type, url) {
    if (type === "directory") {
      this.setState({ folderId: id })
    } else {
      this.setState({ fileUrl: url })
    }
  }

  render() {
    const { viewerType } = this.props

    return <AppDumb
      viewerType={viewerType}
      API={this.API}
      handleFileSelect={this.handleFileSelect}
      folderId={this.state.folderId}
      fileUrl={this.state.fileUrl}
    />
  }
}