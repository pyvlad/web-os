import React from 'react'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  desktop: {
    flex: 1
  },
  toolbar: {
    flex: 0
  }
}))


export default (props) => {
  const { desktop, toolbar } = props
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.desktop}>
        { desktop }
      </div>
      <div className={classes.toolbar}>
        { toolbar }
      </div>
    </div>
  )
}