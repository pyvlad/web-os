import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
  Slide
} from '@material-ui/core'
import Menu from './Menu'
import Background from './Background'


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})


export default (props) => {

  const { 
    isOpen, 
    handleClose
  } = props
  const classes = useStyles()
  const [view, setView] = React.useState("main")
  const handleSelect = (view) => setView(view)
  const handleDialogClose = () => {
    handleClose()
    setView("main")
  }

  let currentComponent
  switch (view) {
    case 'background': 
      currentComponent = <Background />
      break
    default:
      // main
      currentComponent = <Menu handleSelect={handleSelect} />
  }

  return (
    <Dialog 
      fullScreen 
      open={isOpen} 
      onClose={handleClose} 
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={handleDialogClose} 
            aria-label="close"
          >
            <Icon>close</Icon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App Settings
          </Typography>
          {
            (view === "main") 
            ? null 
            : <Button color="inherit" onClick={() => (handleSelect("main"))}>back</Button>
          }
        </Toolbar>
      </AppBar>
      {currentComponent}
    </Dialog>
  )
}