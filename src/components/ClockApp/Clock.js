import React from 'react'
import { Typography } from '@material-ui/core'
import AnalogDisplay from "./AnalogDisplay"


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: new Date()
    }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    const {
      bgColor,
      arrColor,
      size
    } = this.props
    return (
      <div style={{
        height: "100%", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "space-around"
      }}>
        <AnalogDisplay 
          time={ this.state.currentTime }
          bgColor={ bgColor } 
          arrColor={ arrColor } 
          size={ size }
        />
        <Typography 
          variant="h6"
          align="center"
          style={{ padding: 16 }}
        >
          { this.state.currentTime.toLocaleString() }
        </Typography>
      </div>
    )
  }
}


Clock.defaultProps = {
    bgColor: "indigo", 
    arrColor: "PeachPuff", 
    size: 200
}

export default Clock