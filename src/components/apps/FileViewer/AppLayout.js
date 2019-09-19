import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(1)
  },
  leftPane: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  rightPane: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "300px" // otherwise, viewer collapses on column layout
  }
}))


export default (props) => {
  const {
    explorer,
    viewer
  } = props
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={4} className={classes.leftPane} >
        { explorer }
      </Grid>
      <Grid item xs={12} sm={8} className={classes.rightPane} >
        { viewer }
      </Grid>
    </Grid>
  )
}