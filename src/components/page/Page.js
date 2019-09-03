import React from 'react'
import PageDumb from './PageDumb'
import Window from "../windows/Window"


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windows: []
    }
    this.handleWindowCreate = this.handleWindowCreate.bind(this)
    this.handleWindowClose = this.handleWindowClose.bind(this)
  }

  handleWindowCreate(title) {
    // TODO: potential duplicates on async?
    const id = (this.state.windows.length)
      ? Math.max(...this.state.windows.map((w) => w.id)) + 1 
      : 1
    // TODO: is this alright to have components as state?
    const newWindow = {
      component: <Window 
        key={id}
        title={title} 
        handleClose={() => this.handleWindowClose(id)} 
      />,
      id
    }
    this.setState({
      windows: [...this.state.windows, newWindow]
    })
  }

  handleWindowClose(id) {
    const windows = this.state.windows.filter((w) => (w.id !== id))
    this.setState({
      windows
    })
  }

  render() {
    return <PageDumb 
      windows={this.state.windows.map((w)=> w.component)} 
      handleWindowCreate={this.handleWindowCreate} 
    />
  }
}