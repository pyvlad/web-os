import React from 'react'
import { makeStyles } from '@material-ui/styles'
import AnalogArrow from './AnalogArrow'


const useStyles = makeStyles(theme => ({
  display: {
    position: "relative",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "indigo"
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
      <AnalogArrow length={35} width={3} rotate={hoursRotate} />
      <AnalogArrow length={45} width={2} rotate={minutesRotate} />
      <AnalogArrow length={50} width={1} rotate={secondsRotate} />
    </div>
  )
}