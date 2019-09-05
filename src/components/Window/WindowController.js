import React from 'react'
import { Rnd } from 'react-rnd'
import WindowPresenter from './WindowPresenter'


export default (props) => {
  const { children, title, handleClose } = props
  const handleMinimize = () => {console.log("minimizing window")}
  const handleMaximize = () => {console.log("maximizing window")}
  
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 200,
        height: 200,
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
        handleMaximize={handleMaximize}
      >
        { children }
      </WindowPresenter>
    </Rnd>
  )
}