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
  main: ({backgroundColor, backgroundImageUrl}) => ({
    flex: 1,
    backgroundColor: (backgroundImageUrl ? "transparent" : backgroundColor),
    backgroundImage: (backgroundImageUrl ? `url(${backgroundImageUrl})` : null)
  }),
  toolbar: {
    flex: 0,
    backgroundColor: "#aaf",
    display: "flex",
    justifyContent: "space-between"
  }
}))


const Page = ({backgroundColor, backgroundImageUrl}) => {
  const classes = useStyles({backgroundColor, backgroundImageUrl})
  console.log(backgroundImageUrl)
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Typography variant="h1">
          Web OS
        </Typography>
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
    backgroundColor: state.backgroundColor,
    backgroundImageUrl: state.backgroundImageUrl
  }
)

export default connect(mapStateToProps)(Page)