import React from 'react'
import Layout from './Layout'
import Explorer from './Explorer'
import Viewer from './Viewer'
import { Typography } from '@material-ui/core'

import apiService from './apiService'


const AppDumb = (props) => {
  const {
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

  const viewer = <Viewer link={fileUrl} />

  const header = (
    <React.Fragment>
      <Typography variant="h6">
        Welcome to Simple File Viewer! 
      </Typography>
      <Typography variant="body1">
        This viewer uses PDF viewer built into your browser.
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
    return <AppDumb 
      folderId={this.state.folderId}
      API={this.API}
      handleFileSelect={this.handleFileSelect}
      fileUrl={this.state.fileUrl}
    />
  }
}