import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import {
  Button,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Icon,
  Slide
} from '@material-ui/core'
import BackgroundForm from './BackgroundForm'


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


const SettingsDialog = (props) => {
  const classes = useStyles()

  const { 
    isOpen, 
    handleClose,
    backgroundColor, 
    backgroundImageUrl
  } = props

  const [view, setView] = React.useState("main")

  // TODO rewrite with switch
  // TODO change view to main on close settings
  let currentView;
  if (view === "main") {
    currentView = (
      <List>
        <ListItem button onClick={() => (setView("background"))}>
          <ListItemText 
            primary="Background" 
            secondary={backgroundImageUrl ? backgroundImageUrl : backgroundColor} 
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Colors" secondary="" />
        </ListItem>
      </List>
    )
  }
  else if (view === "background") {
    currentView = (
      <BackgroundForm 
        backgroundColor={backgroundColor}
        backgroundImageUrl={backgroundImageUrl}
      />
    )
  }

  return (
    <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <Icon>close</Icon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App Settings
          </Typography>
          {
            (view === "main") 
            ? null 
            : <Button color="inherit" onClick={() => (setView("main"))}>
              back
            </Button>
          }
        </Toolbar>
      </AppBar>
      {currentView}
    </Dialog>
  )
}

const mapStateToProps = (state) => (
  {
    backgroundColor: state.backgroundColor,
    backgroundImageUrl: state.backgroundImageUrl
  }
)
export default connect(mapStateToProps)(SettingsDialog)