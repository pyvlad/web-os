import React from 'react'
import { Rnd } from 'react-rnd'
import WindowPresenter from './WindowPresenter'


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
  }

  handleMaximize() {
    this.setState((state, props) => ({
      x: 0, 
      y: 0,
      width: props.desktopWidth,
      height: props.desktopHeight
    }))
  }

  render() {
    const { children, title, handleClose } = this.props
    const handleMinimize = () => {console.log("minimizing window")}
    
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
        style={{ overflow: "hidden" /* this prevents right scrollbar from appearing */}}
      >
        <WindowPresenter 
          title={title}
          handleClose={handleClose} 
          handleMinimize={handleMinimize} 
          handleMaximize={this.handleMaximize}
        >
          { children }
        </WindowPresenter>
      </Rnd>
    )
  }
}