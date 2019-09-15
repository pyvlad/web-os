import React from 'react'
import {makeStyles} from '@material-ui/styles'
import { Grid } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: "100vh"
  },
  header: {
    backgroundColor: (
      theme.palette.type === "light" 
      ? theme.palette.primary.light
      : theme.palette.primary.dark
    ),
    padding: theme.spacing(1)
  },
  container: {
    flex: 1
  },
  leftPane: {
    padding: theme.spacing(2)
  },
  rightPane: {
    minHeight: "350px",
    backgroundColor: theme.palette.background.paper
  }
}))


export default (props) => {
  const {
    header,
    explorer,
    viewer
  } = props
  const classes = useStyles()

  return <div className={classes.root}>
    <div className={classes.header}>
      {header}
    </div>
    <Grid 
      container 
      direction="row"
      justify="center"
      alignItems="stretch"
      className={classes.container}
    >
      <Grid item xs={12} sm={4} className={classes.leftPane} >
        { explorer }
      </Grid>
      <Grid item xs={12} sm={8} className={classes.rightPane} >
        { viewer }
      </Grid>
    </Grid>
  </div>
}