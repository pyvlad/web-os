import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { 
  Toolbar,
  Typography
} from '@material-ui/core'
import Menu from './Menu'
import Clock from './Clock'


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: ({bgType, bgColor, bgUrl}) => ({
    flex: 1,
    backgroundColor: (bgType === "color" ? bgColor : "transparent"),
    backgroundImage: (bgType === "image" ? `url(${bgUrl})` : null)
  }),
  toolbar: {
    flex: 0,
    backgroundColor: "#aaf",
    display: "flex",
    justifyContent: "space-between"
  }
}))


const Page = ({bgType, bgColor, bgUrl}) => {
  const classes = useStyles({bgType, bgColor, bgUrl})
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div style={{textAlign: "center"}}>
          <Typography 
            variant="h2" 
            component="span" 
            style={{
              backgroundColor: "RGBA(255,255,255,0.5)",
              borderRadius: "0 0 30px 30px",
              padding: "0px 30px 10px",
            }}
          >
            WebOS
          </Typography>
        </div>
      </div>
      <Toolbar className={classes.toolbar}>
        <Menu />
        <Typography variant="h4">
          Toolbar
        </Typography>
        <Typography variant="subtitle2">
          <Clock />
        </Typography>
      </Toolbar>
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

export default connect(mapStateToProps)(Page)