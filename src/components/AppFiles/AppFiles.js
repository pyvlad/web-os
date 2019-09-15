import React from 'react'
import Layout from './Layout'
import Explorer from './Explorer'
import ViewerBasic from './ViewerBasic'
import ViewerCustom from './ViewerCustom'
import { Typography } from '@material-ui/core'

import apiService from './apiService'


const AppDumb = (props) => {
  const {
    viewerType,
    API,
    folderId,
    fileUrl,
    handleFileSelect
  } = props

  const explorer = <Explorer 
    API={API}
    folderId={folderId}
    handleFileSelect={handleFileSelect}
  />

  const viewer = (viewerType === "basic")
    ? <ViewerBasic fileUrl={fileUrl} />
    : <ViewerCustom fileUrl={fileUrl} />

  const header = (
    <React.Fragment>
      <Typography variant="h6">
        Welcome to {viewerType} File Viewer! 
      </Typography>
      <Typography variant="body1">
        {
          (viewerType === "basic")
          ? "This viewer uses PDF viewer built into your browser."
          : "This viewer uses custom PDF viewer built with react-pdf."
        }
        
      </Typography>
    </React.Fragment>
  )

  return <Layout 
    header={header}
    explorer={explorer}
    viewer={viewer}
  />
}


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
      folderId={this.state.folderId}
      API={this.API}
      handleFileSelect={this.handleFileSelect}
      fileUrl={this.state.fileUrl}
    />
  }
}