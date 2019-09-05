import React from 'react'
import { Rnd } from 'react-rnd'
import WindowSimple from './WindowSimple'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 100,
      y: 100,
      width: 200,
      height: 200
    }
    this.handleMaximize = this.handleMaximize.bind(this)
    this.handleMinimize = this.handleMinimize.bind(this)
  }

  handleMaximize() {
    this.setState((state, props) => ({
      x: 0, 
      y: 0,
      width: props.desktopWidth,
      height: props.desktopHeight,
      isHidden: false
    }))
  }

  handleMinimize() {
    this.setState({
      isHidden: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevProps.isSelected && prevState.isHidden && this.props.isSelected) {
      this.setState({
        isHidden: false
      })
    }
  }

  render() {
    const { children, title, isSelected, handleClose, zIndex } = this.props
    
    return (
      <Rnd
        size={{ 
          width: this.state.width,  
          height: this.state.height 
        }}
        position={{ 
          x: this.state.x, 
          y: this.state.y 
        }}
        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
          })
        }}
        minWidth={200}
        minHeight={200}
        bounds="parent"
        style={{ 
          overflow: "hidden" /* this prevents right scrollbar from appearing */,
          zIndex: zIndex,
          display: this.state.isHidden ? "none" : "block"
        }}
      >
        <WindowSimple 
          title={title}
          isSelected={isSelected}
          handleClose={handleClose} 
          handleMinimize={this.handleMinimize} 
          handleMaximize={this.handleMaximize}
        >
          { children }
        </WindowSimple>
      </Rnd>
    )
  }
}