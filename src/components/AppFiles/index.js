import React from 'react'
import AppFiles from './AppFiles'


export default ({match}) => {
  return <AppFiles viewerType={match.params.viewerType} />
}