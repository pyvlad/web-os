import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Logo from './Logo'


const useStyles = makeStyles(theme => ({
  desktop: ({bgType, bgColor, bgUrl}) => ({
    backgroundColor: (bgType === "color" ? bgColor : "transparent"),
    backgroundImage: (bgType === "image" ? `url(${bgUrl})` : null),
    backgroundSize: "cover", // width or height to fit, keep aspect ratio, crop
    backgroundPosition: "center",
    // take full height of the container (height: "100%" doesn't work in Chrome)
    // NOTE: rnd window's 'bounds = "parent"' requires this 
    // to be a positioned element as well (absolute or relative) 
    position: "absolute",   
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: "hidden"  
    // otherwise, windows size jumps on resize as scrollbar appears and disappears
  })
}))


export default (props) => {
  const {children, bgType, bgColor, bgUrl} = props
  const classes = useStyles({bgType, bgColor, bgUrl})

  return (
    <div className={classes.desktop} id="desktop">
      <div style={{textAlign: "center"}}>
        <Logo/>
      </div>
      {children}
    </div>
  )
}