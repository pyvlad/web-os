import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PageWindows from './PageWindows'
import AppFiles from './AppFiles'


export default () => {
  return (
    <Switch>
      <Route path="/" exact 
        render={(props) => <PageWindows {...props} />}
      />
      <Route path="/files/:viewerType"
        render={(props) => <AppFiles {...props}/>}
      />
      <Route render={()=>(<div>404 NOT FOUND</div>)}/>
    </Switch>
  )
}