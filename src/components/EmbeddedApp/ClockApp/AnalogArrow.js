import React from 'react'


export default (props) => {
  const {
    length, // Number, % of clock height
    width,  // Number, % of clock width
    rotate  // Number (degree)
  } = props

  let arrowStyle = {
    position: "absolute",
    height: length + "%",
    width: width + "%",
    top: "50%",
    left: `${50 - (width / 2)}%`,
    transform: `rotate(${rotate}deg)`,
    transformOrigin: "50% 0%",
    borderRadius: "10px",
    backgroundColor: "#eee"
  }

  return (
    <div style={arrowStyle}></div>
  )
}