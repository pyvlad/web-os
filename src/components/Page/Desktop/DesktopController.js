import React from 'react'
import DesktopPresenter from './DesktopPresenter'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize() {
    const element = document.getElementById("desktop")
    this.props.setDesktopSize(element.offsetWidth, element.offsetHeight)
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return <DesktopPresenter {...this.props} />
  }
}