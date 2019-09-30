import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  container: {
    whiteSpace: "nowrap",
    overflow: "auto"
  },
  button: {
    marginRight: theme.spacing(1),
    maxWidth: 100,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "inline"
  },
  selected: {
    backgroundColor: theme.palette.secondary.main
  }
}))


export default (props) => {
  const { 
    windows,
    selectedWindowId,
    handleWindowSelect
  } = props
  const classes = useStyles()

  return (
    <div className={classes.container}>
      {
        windows.map((w) => (
          <Button 
            variant="contained"
            color="primary"
            size="small"
            className={[classes.button, 
              (w.id === selectedWindowId) ? classes.selected : ""
            ].join(" ")}
            key={w.id} 
            onClick={() => handleWindowSelect(w.id)}
          >
            {w.title}
          </Button>
        ))
      }
    </div>
  )
}