import React from 'react'
import ExampleApp from './ExampleApp'
import ClockApp from './ClockApp'
import MailApp from './MailApp'
import FilesApp from './FilesApp'


export default (props) => {
  const { name } = props

  switch (name) {
    case 'example':
      return <ExampleApp />

    case 'clock':
      return <ClockApp size={300} />

    case 'mail':
      return <MailApp />

    case 'basicFileViewer':
      return <FilesApp viewerType="basic" />

    case 'customFileViewer':
      return <FilesApp viewerType="custom" />

    default:
      return null
  }
}