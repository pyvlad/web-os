import React from 'react'
import { Rnd } from 'react-rnd'
import WindowSimple from './WindowSimple'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.minWidth = 200
    this.minHeight = 200
    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      isDragged: false
    }
    this.handleMaximize = this.handleMaximize.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  handleMaximize() {
    const desktop = document.getElementById("desktop")
    this.setState((state, props) => {
      props.handleSelect(props.id)
      return {
        x: 0, 
        y: 0,
        width: desktop.offsetWidth,
        height: desktop.offsetHeight
      }
    })
  }

  handleResize() {
    this.setState((state) => {
      const desktop = document.getElementById("desktop")

      let rightOffset = desktop.offsetWidth - state.x;
      let bottomOffset = desktop.offsetHeight - state.y;

      let x = (rightOffset > state.width) ? state.x : state.x + rightOffset - state.width;
      let y = (bottomOffset > state.height) ? state.y : state.y + bottomOffset - state.height;

      let width, height;
      if (x < 0) {
        x = 0;
        width = desktop.offsetWidth;
      }
      else {
        width = state.width;
      }

      if (y < 0) {
        y = 0;
        height = desktop.offsetHeight;
      }
      else {
        height = state.height;
      }

      return { x, y, width, height }
    })
  }

  componentDidMount() {
    const desktop = document.getElementById("desktop")
    this.setState({
      x: desktop.offsetWidth / 6,
      y: desktop.offsetHeight / 10,
      width: desktop.offsetWidth * 2 / 3,
      height: desktop.offsetHeight * 4 / 5
    })
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }


  render() {
    const { 
      children, 
      title, 
      isSelected, 
      handleClose,
      handleSelect,
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
        onDragStart={(e) => {this.setState({isDragged: true})}}
        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y, isDragged: false }) }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
          })
        }}
        minWidth={this.minWidth}
        minHeight={this.minHeight}
        bounds="parent"
        style={{
          zIndex: zIndex
        }}
        onMouseDown={() => handleSelect()}
      >
        <WindowSimple 
          title={title}
          isSelected={isSelected}
          isDragged={this.state.isDragged}
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