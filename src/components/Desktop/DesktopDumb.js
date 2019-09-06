import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Logo from './Logo'


const useStyles = makeStyles(theme => ({
  desktop: ({bgType, bgColor, bgUrl}) => ({
    backgroundColor: (bgType === "color" ? bgColor : "transparent"),
    backgroundImage: (bgType === "image" ? `url(${bgUrl})` : null),
    position: "relative",   // required by rnd window bounds = "parent",
    height: "100%"          // take full height of the container
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