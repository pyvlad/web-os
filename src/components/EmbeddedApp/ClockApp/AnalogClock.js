import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AnalogArrow from './AnalogArrow'
import svgImage from './svgImage.js'


const useStyles = makeStyles(theme => ({
  display: {
    position: "relative",
    width: "100%",
    maxWidth: "300px",
    maxHeight: "300px",
    lineHeight: 0 // for some reason it otherwise streches container vertically a bit
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
      <div dangerouslySetInnerHTML={{__html: svgImage}}></div>
      <AnalogArrow length={35} width={3} rotate={hoursRotate} />
      <AnalogArrow length={45} width={2} rotate={minutesRotate} />
      <AnalogArrow length={50} width={1} rotate={secondsRotate} />
    </div>
  )
}