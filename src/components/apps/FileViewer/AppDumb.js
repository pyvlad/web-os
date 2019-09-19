import React from 'react'
import AppLayout from './AppLayout'
import Explorer from './Explorer'
import { BasicViewer, CustomViewer } from './Viewer'


export default (props) => {
  const {
    viewerType,
    API,
    handleFileSelect,
    folderId,
    fileUrl
  } = props

  const explorer = <Explorer 
    API={API}
    folderId={folderId}
    handleFileSelect={handleFileSelect}
  />

  const viewer = (viewerType === "basic")
    ? <BasicViewer fileUrl={fileUrl} />
    : <CustomViewer fileUrl={fileUrl} />

  return <AppLayout 
    explorer={explorer}
    viewer={viewer}
  />
}