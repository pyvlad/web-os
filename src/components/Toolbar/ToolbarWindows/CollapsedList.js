import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  Button,
  List, 
  ListItem,
  ListItemText,
  IconButton
 } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 'auto',
  },
  selected: {
    color: theme.palette.primary.dark
  }
}));

export default (props) => {
  const { 
    windows,
    selectedWindowId,
    handleWindowSelect,
    handleWindowClose
  } = props

  const classes = useStyles();
  const [state, setState] = React.useState({isOpen: false});

  const toggleDrawer = (isOpen) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ isOpen });
  };

  if (!windows.length) {
    return <div></div>
  }

  return (
    <div>
      <Button 
        variant="contained"
        color="primary"
        size="small"
        onClick={toggleDrawer(true)}
      >
        Running Apps: {windows.length}
      </Button>
      <Drawer anchor="bottom" open={state.isOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
          {
            windows.map((w) => (
              <ListItem 
                key={w.id}
                button 
                selected={w.id === selectedWindowId} 
                className={w.id === selectedWindowId ? classes.selected : ""}
              >
                <ListItemText 
                  onClick={() => handleWindowSelect(w.id)}
                >
                  {w.title}
                </ListItemText>
                <IconButton 
                  size="small" 
                  color="secondary"
                  onClick={() => handleWindowClose(w.id)}>
                  <CloseIcon />
                </IconButton>
              </ListItem>
            ))
          }
          </List>
        </div>
      </Drawer>
    </div>
  );
}