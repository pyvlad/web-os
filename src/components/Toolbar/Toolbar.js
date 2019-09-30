import React from 'react'
import { makeStyles } from '@material-ui/styles'

import ToolbarMenu from './ToolbarMenu'
import ToolbarClock from './ToolbarClock'
import ToolbarWindows from './ToolbarWindows'


const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    height: 48
  }
}))


export default (props) => {
  const {
    windows,
    selectedWindowId,
    handleWindowCreate,
    handleWindowSelect
  } = props
  const classes = useStyles()
  
  return (
    <div className={classes.toolbar}>
      <ToolbarMenu 
        handleWindowCreate={handleWindowCreate} 
      />
      <ToolbarWindows 
        windows={windows}
        selectedWindowId={selectedWindowId}
        handleWindowSelect={handleWindowSelect}
      />
      <ToolbarClock 
        handleWindowCreate={handleWindowCreate} 
      />
    </div>
  )
}
