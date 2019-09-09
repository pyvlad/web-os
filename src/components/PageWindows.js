import React from 'react'
import PageComposed from './PageComposed'


// Helper functions
const getUniqueId = () => (
  Date.now().toString(36) + Math.random().toString(36).substr(2)
)

const getMaxZIndex = (windows) => {
  const value = (windows.length)
    ? Math.max(...windows.map((w) => w.zIndex))
    : 1 // in case everything is hidden
  return Math.max(value, 1)
}

const getZIndexMap = (zValues) => {
  const unique = {}
  let zIndex; // to get rid of 'unused varible' warning
  for (zIndex of zValues) {
    unique[zIndex] = true
  }
  const uniqueSorted = Array.from(Object.keys(unique)).sort((x,y) => (x-y))
  return Object.fromEntries(
    uniqueSorted.map(
      (value, index) => ([value, (value >= 0) ? index : value]) // keep negative values
    )
  )
}


// Basically, this is Window Manager
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      windows: [],
      selectedWindow: null
    }
  }

  handleWindowCreate = (title, appName) => {
    this.setState((state) => {
      const id = getUniqueId()
      const zIndex = getMaxZIndex(state.windows) + 1
      const newWindow = {
        id,
        title,
        appName,
        zIndex
      }

      return {
        windows: [...state.windows, newWindow],
        selectedWindow: id
      }
    })
  }

  handleWindowClose = (id) => {
    this.setState((state) => {
      // filter out closed window:
      let windows = state.windows.filter((w) => (w.id !== id)) 
      // make copy of array objects:
      windows = windows.map((w) => Object.assign({}, w))
      // nothing selected if this window was selected, otherwise keep focus:
      let selectedWindow = (state.selectedWindow === id) ? null : state.selectedWindow
       
      return {
        windows,
        selectedWindow
      }
    })
  }

  handleWindowSelect = (id) => {
    this.setState((state) => {
      // reassign positive zIndexes to stop them from rising indefinitely
      const zIndexMap = getZIndexMap(state.windows.map((w) => w.zIndex))
      const windows = state.windows.map(
        (w) => Object.assign({}, w, {zIndex: zIndexMap[w.zIndex]})
      )
      const window = windows.find((w) => (w.id === id))
      window.zIndex = getMaxZIndex(windows) + 1

      return {
        windows: [...windows],
        selectedWindow: id
      }
    })
  }

  handleWindowHide = (id) => {
    this.setState((state) => {
      const windows = state.windows.map((w) => Object.assign({}, w))
      const window = windows.find((w) => (w.id === id))
      window.zIndex = -1

      return {
        windows: [...windows]
      }
    })
  }

  render() {
    return <PageComposed 
      windows={this.state.windows} 
      selectedWindow={this.state.selectedWindow}
      handleWindowCreate={this.handleWindowCreate} 
      handleWindowClose={this.handleWindowClose}
      handleWindowSelect={this.handleWindowSelect}
      handleWindowHide={this.handleWindowHide}
    />
  }
}