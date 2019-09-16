import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import AnalogClock from './AnalogClock'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: "stretch",
    height: "100%"
  },
  clock: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: theme.spacing(2)
  },
  text: {
    flex: 0,
    backgroundColor: "#28170b",
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2)
  }
}))


export default (props) => {
  const { time } = props
  const classes = useStyles()

  return <div className={classes.container}>
    <div className={classes.clock}>
      <AnalogClock time={ time } />
    </div>
    <Typography variant="h6" align="center" className={classes.text}>
      { time.toLocaleString() }
    </Typography>
  </div>
}