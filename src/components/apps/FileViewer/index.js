import React from 'react'
import AppSmart from './AppSmart'


export default ({match}) => {
  return <AppSmart viewerType={match.params.viewerType} />
}