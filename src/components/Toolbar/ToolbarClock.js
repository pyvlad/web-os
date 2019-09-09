import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  Button,
  Typography 
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  time: {
    color: theme.palette.primary.contrastText
  }
}))


class ClockTime extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval( () => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  
  render() {
    return <span>{this.state.currentTime.toLocaleTimeString()}</span>
  }
}

export default (props) => {
  const { handleWindowCreate } = props
  const classes = useStyles()

  return (
    <Button onClick={() => handleWindowCreate("Clock App", "clock")}>
      <Typography 
        variant="subtitle2" 
        className={classes.time}
      >
        <ClockTime />
      </Typography>
    </Button>
  )
}