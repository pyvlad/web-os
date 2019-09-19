import React from 'react'
import CustomViewerDumb from './CustomViewerDumb'


export default class extends React.Component {
  state = { 
    numPages: null, 
    pageNumber: 1 
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  goToPrevPage = () => {
    this.setState(
      (state) => ({ pageNumber: Math.max(state.pageNumber - 1, 1) })
    )
  }

  goToNextPage = () => {
    this.setState(
      (state) => ({ pageNumber: Math.min(state.pageNumber + 1, state.numPages) })
    )
  }

  render() {
    const { fileUrl } = this.props

    return <CustomViewerDumb
      fileUrl={fileUrl}
      onDocumentLoadSuccess={this.onDocumentLoadSuccess}
      goToPrevPage={this.goToPrevPage}
      goToNextPage={this.goToNextPage}
      pageNumber={this.state.pageNumber}
      numPages={this.state.numPages}
    />
  }
}