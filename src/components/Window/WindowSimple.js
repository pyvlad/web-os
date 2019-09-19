import React from 'react'
import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  IconButton
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import MinimizeIcon from '@material-ui/icons/Minimize'
import CropSquareIcon from '@material-ui/icons/CropSquare'


const useStyles = makeStyles(theme => ({
  container: {
    height: "100%", 
    width: "100%",

    borderWidth: "2px",
    borderStyle: "ridge",
    borderColor: theme.palette.primary.light,
    
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  content: {
    flex: 1,
    backgroundColor: theme.palette.background.default,
    position: "relative"
  },
  overlayOnDrag: {
    backgroundColor: "RGBA(0,0,0,0.25)", 
    zIndex: 1, 
    position: "absolute", 
    top:0, 
    bottom: 0, 
    right: 0, 
    left:0
  },
  overlayOnNotSelected: {
    /* without this overlay resizing breaks when mouse gets over an iframe */
    backgroundColor: "RGBA(0,0,0,0)", 
    zIndex: 1, 
    position: "absolute", 
    top:0, 
    bottom: 0, 
    right: 0, 
    left:0
  },
  bar: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  barSelected: {
    backgroundColor: theme.palette.primary.dark
  },
  controls: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  controlItem: {
    color: theme.palette.primary.contrastText,
    margin: 0,
    padding: 0
  },
  title: {
    color: theme.palette.primary.contrastText,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}))


export default (props) => {
  const classes = useStyles()
  const {
    children,
    title,
    isSelected,
    isDragged,
    handleClose,
    handleMinimize,
    handleMaximize
  } = props

  return (
    <div className={classes.container}>
      <div className={[classes.bar, isSelected ? classes.barSelected : ""].join(" ")}>
        <div className={classes.controls}>
          <IconButton size="small" className={classes.controlItem} onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
          <IconButton size="small" className={classes.controlItem} onClick={handleMinimize}>
            <MinimizeIcon/>
          </IconButton>
          <IconButton size="small" className={classes.controlItem} onClick={handleMaximize}>
            <CropSquareIcon/>
          </IconButton>
        </div>
        <Typography 
          variant={"body2"}
          color={isSelected ? "textPrimary" : "textSecondary"}
          className={classes.title}
        >
          { title }
        </Typography>
      </div>
      <div className={classes.content} >
        { isDragged ? <div className={classes.overlayOnDrag }></div> : null }
        { isSelected ? null : <div className={classes.overlayOnNotSelected }></div> }
        { children }
      </div>
    </div>
  )
}