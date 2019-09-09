import React from 'react'
import ClockApp from './ClockApp'
import ExampleApp from './ExampleApp'


export default (props) => {
  const { name } = props

  switch (name) {
    case 'example':
      return <ExampleApp />

    case 'clock':
      return <ClockApp size={300} />

    default:
      return null
  }
}