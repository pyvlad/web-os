import React from 'react'
import { Typography } from '@material-ui/core'


export default class extends React.Component {
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
    return (
      <Typography 
        variant="subtitle2" 
        className="clock"
      >
        {this.state.currentTime.toLocaleString()}
      </Typography>
    )
  }
}