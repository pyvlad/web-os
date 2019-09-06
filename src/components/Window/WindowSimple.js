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
    borderColor: theme.palette.primary.main,
    borderStyle: "solid",
    borderWidth: "2px",
    display: "flex",
    flexDirection: "column"
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: theme.palette.background.default,
    height: "100%"
  },
  topBar: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  topBarControls: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  },
  control: {
    color: theme.palette.primary.contrastText,
    margin: 0,
    padding: 0
  },
  topBarTitle: {
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
    handleClose,
    handleMinimize,
    handleMaximize
  } = props

  return (
    <div className={classes.container}>
      <div className={classes.topBar}>
        <div className={classes.topBarControls}>
          <IconButton size="small" className={classes.control} onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
          <IconButton size="small" className={classes.control} onClick={handleMinimize}>
            <MinimizeIcon/>
          </IconButton>
          <IconButton size="small" className={classes.control} onClick={handleMaximize}>
            <CropSquareIcon/>
          </IconButton>
        </div>
        <Typography 
          variant={"h6"}
          color={isSelected ? "textPrimary" : "textSecondary"}
          className={classes.topBarTitle}
        >
          { title }
        </Typography>
      </div>
      <div className={classes.contentWrapper}>
        { children }
      </div>
    </div>
  )
}