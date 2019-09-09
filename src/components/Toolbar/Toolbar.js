import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Toolbar } from '@material-ui/core'

import ToolbarMenu from './ToolbarMenu'
import ToolbarClock from './ToolbarClock'
import ToolbarWindows from './ToolbarWindows'


const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "space-between"
  }
}))


export default (props) => {
  const {
    windows,
    handleWindowCreate,
    handleWindowSelect
  } = props
  const classes = useStyles()
  
  return (
    <Toolbar className={classes.toolbar}>
      <ToolbarMenu 
        handleWindowCreate = {handleWindowCreate} 
      />
      <ToolbarWindows 
        windows={windows}
        handleWindowSelect = {handleWindowSelect}
      />
      <ToolbarClock />
    </Toolbar>
  )
}
