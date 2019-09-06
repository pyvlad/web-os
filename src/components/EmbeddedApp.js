import React from 'react'
import ClockApp from './ClockApp'


export default ({name}) => {
  let component = null

  if (name === "example") {
    component = <div style={{backgroundColor: "pink"}}>
      <p>Hello, windows!</p>
      <p>Created/updated at {new Date().toLocaleTimeString()}...</p>
    </div>
  } else if (name === "clock") {
    component = <ClockApp size={300} />
  }

  return component
}