import React from 'react'


export default ({name}) => {
  let component = null

  if (name === "example") {
    component = <div style={{backgroundColor: "pink"}}>
      <p>Hello, windows!</p>
      <p>Created/updated at {new Date().toLocaleTimeString()}...</p>
    </div>
  }

  return component
}