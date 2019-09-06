import React from 'react'


const ClockArrow = (props) => {
  const {
    size,
    rotate,
    color,
    width,
    length
  } = props

  const topOffset = (deg) => -Math.cos(deg * Math.PI/180)
  const leftOffset = (deg) => Math.sin(deg * Math.PI/180)

  let arrowStyle = {
      position: "absolute",
      top: size / 2 + topOffset(rotate) * width / 2,
      left: size / 2 + leftOffset(rotate) * width / 2,
      width: length,
      height: width,
      transform: `rotate(${rotate}deg)`,
      transformOrigin: "0% 0%",
      backgroundColor: color,
      borderRadius: width / 2
  }
  
  return (
    <div style={arrowStyle}></div>
  )
}


export default (props) => {
  const {
    time, // Date object
    size,
    bgColor,
    arrColor
  } = props 
    
  // -90 to turn it to 12 o'clock (by default it's 15'), e.g. rotate(-25deg):
  let secondsRotate = (time.getSeconds()/60)*360 - 90
  let minutesRotate = (time.getMinutes()/60)*360 - 90
  let hoursRotate = (time.getHours()/12 + time.getMinutes()/60/12)*360 - 90
  let clockStyle = {
      position: "relative",
      width: size,
      height: size, 
      borderRadius: size / 2,
      backgroundColor: bgColor,
      borderColor: arrColor,
      borderStyle: "solid",
      margin: "auto"
  }

  return (
    <div style={clockStyle}>
      <ClockArrow 
        size={size} 
        rotate={hoursRotate} 
        color={arrColor}
        width={10}
        length={0.35 * size}
      />
      <ClockArrow 
        size={size} 
        rotate={minutesRotate} 
        color={arrColor}
        width={6}
        length={0.45 * size}
      />
      <ClockArrow 
        size={size} 
        rotate={secondsRotate} 
        color={arrColor}
        width={4}
        length={0.5 * size}
      />
    </div>
  )
}