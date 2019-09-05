import React from 'react'
import Page from './Page'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windows: [],
      activeWindow: null
    }
    this.handleWindowCreate = this.handleWindowCreate.bind(this)
    this.handleWindowClose = this.handleWindowClose.bind(this)
    this.handleWindowSelect = this.handleWindowSelect.bind(this)
  }

  handleWindowCreate(title, contentComponent) {
    const id =  Date.now().toString(36) + Math.random().toString(36).substr(2)
    this.setState({
      activeWindow: id,
      windows: [...this.state.windows, {
        id,
        order: ((this.state.windows.length)
          ? Math.max(this.state.windows.map((w) => w.order)) + 1
          : 1),
        title,
        contentComponent
      }]
    })
  }

  handleWindowClose(id) {
    const windows = this.state.windows.filter((w) => (w.id !== id))
    this.setState({
      windows
    })
  }

  handleWindowSelect(id) {
    this.setState({
      activeWindow: id
    })
  }

  render() {
    return <Page 
      windows={this.state.windows} 
      activeWindow={this.state.activeWindow}
      handleWindowCreate={this.handleWindowCreate} 
      handleWindowClose={this.handleWindowClose}
      handleWindowSelect={this.handleWindowSelect}
    />
  }
}