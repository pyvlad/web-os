import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PageWindows from './PageWindows'
import FileViewer from './apps/FileViewer'


export default () => {
  return (
    <Switch>
      <Route path="/" exact 
        render={(props) => <PageWindows {...props} />}
      />
      <Route path="/files/:viewerType"
        render={(props) => <FileViewer {...props}/>}
      />
      <Route render={()=>(<div>404 NOT FOUND</div>)}/>
    </Switch>
  )
}