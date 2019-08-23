import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
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


export default ({ isOpen, handleClose }) => {
  const classes = useStyles()

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
          <Button color="inherit" onClick={handleClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem button>
          <ListItemText primary="Background" secondary="Grey" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Colors" secondary="" />
        </ListItem>
      </List>
    </Dialog>
  )
}