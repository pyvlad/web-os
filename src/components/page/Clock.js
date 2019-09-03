import React from 'react'


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
    return <span>{this.state.currentTime.toLocaleString()}</span>
  }
}