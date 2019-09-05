import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import Menu from '../Menu'
import Clock from '../Clock'


const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundColor: theme.palette.primary.dark,
    display: "flex",
    justifyContent: "space-between"
  }
}))


export default (props) => {
  const { windows, handleWindowCreate, handleWindowSelect } = props
  const classes = useStyles()

  return (
    <Toolbar className={classes.toolbar}>
      <Menu handleWindowCreate={handleWindowCreate} />
      <div>
        {
          windows.map((w) => (
            <Button 
              variant="contained"
              color="primary"
              size="small"
              style={{marginRight: 10}}
              key={w.id} 
              onClick={() => handleWindowSelect(w.id)}
            >
              {w.title}
            </Button>
          ))
        }
      </div>
      <Typography variant="subtitle2">
        <Clock />
      </Typography>
    </Toolbar>
  )
}
