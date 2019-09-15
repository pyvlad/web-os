import React from 'react'
import { Rnd } from 'react-rnd'
import WindowSimple from './WindowSimple'


export default class extends React.Component {
  // TODO move this to Windows component
  constructor(props) {
    super(props)
    this.state = {
      x: props.desktopWidth / 6,
      y: props.desktopHeight / 6,
      width: props.desktopWidth * 2 / 3,
      height: props.desktopHeight * 2 / 3
    }
    this.handleMaximize = this.handleMaximize.bind(this)
  }

  handleMaximize() {
    this.setState((state, props) => {
      props.handleSelect(props.id)
      return {
        x: 0, 
        y: 0,
        width: props.desktopWidth,
        height: props.desktopHeight
      }
    })
  }

  render() {
    const { 
      children, 
      title, 
      isSelected, 
      handleClose,
      handleHide,
      zIndex
    } = this.props
    
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
          zIndex: zIndex
        }}
      >
        <WindowSimple 
          title={title}
          isSelected={isSelected}
          handleClose={handleClose} 
          handleMinimize={handleHide} 
          handleMaximize={this.handleMaximize}
        >
          { children }
        </WindowSimple>
      </Rnd>
    )
  }
}