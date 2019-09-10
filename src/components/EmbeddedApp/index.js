import React from 'react'
import ExampleApp from './ExampleApp'
import ClockApp from './ClockApp'
import MailApp from './MailApp'


export default (props) => {
  const { name } = props

  switch (name) {
    case 'example':
      return <ExampleApp />

    case 'clock':
      return <ClockApp size={300} />

    case 'mail':
      return <MailApp />

    default:
      return null
  }
}