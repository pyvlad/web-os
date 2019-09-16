import React from 'react'
import ClockDumb from "./ClockDumb"


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
    return <ClockDumb time={ this.state.currentTime } />
  }
}

export default Clock