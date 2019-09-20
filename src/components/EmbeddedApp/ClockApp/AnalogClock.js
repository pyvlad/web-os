import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AnalogArrow from './AnalogArrow'
import clockDisplay from './clockDisplay.svg'


const useStyles = makeStyles(theme => ({
  display: {
    position: "relative",
    width: "100%",
    maxWidth: "300px",
    maxHeight: "300px",
    lineHeight: 0 // for some reason it otherwise streches container vertically a bit
  },
  displayImg: {
    width: "100%"
    // "width" sets an explicit dimension for the image. 
    // Setting only width (and not height) will cause the image to scale proportionally, 
    // while defining both will stretch the image.
  }
}))


export default (props) => {
  const { time } = props
  const classes = useStyles()
    
  let secondsRotate = (time.getSeconds()/60)*360 + 180
  let minutesRotate = (time.getMinutes()/60)*360 + 180
  let hoursRotate = (time.getHours()/12 + time.getMinutes()/60/12)*360 + 180

  return (
    <div className={classes.display}>
      <img src={clockDisplay} alt="" className={classes.displayImg} draggable="false" />
      <AnalogArrow length={35} width={3} rotate={hoursRotate} />
      <AnalogArrow length={45} width={2} rotate={minutesRotate} />
      <AnalogArrow length={50} width={1} rotate={secondsRotate} />
    </div>
  )
}