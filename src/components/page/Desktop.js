import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import Logo from './Logo'


const useStyles = makeStyles(theme => ({
  desktop: ({bgType, bgColor, bgUrl}) => ({
    backgroundColor: (bgType === "color" ? bgColor : "transparent"),
    backgroundImage: (bgType === "image" ? `url(${bgUrl})` : null),
    position: "relative",   // required by rnd window bounds = "parent",
    height: "100%"          // take full height of the container
  })
}))


const Desktop = ({children, bgType, bgColor, bgUrl}) => {
  const classes = useStyles({bgType, bgColor, bgUrl})

  return (
    <div className={classes.desktop}>
      <div style={{textAlign: "center"}}>
        <Logo/>
      </div>
      {children}
    </div>
  )
}


const mapStateToProps = (state) => (
  {
    bgType: state.backgroundType,
    bgColor: state.backgroundColor,
    bgUrl: state.backgroundImageUrl
  }
)

export default connect(mapStateToProps)(Desktop)