import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Link } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  message: {
    padding: theme.spacing(2)
  }
}))

export default (props) => {
  const { link } = props
  const classes = useStyles()

  if (!link) {
    return <Typography variant="h4" align="center" className={classes.message}>
      File Viewer
    </Typography>
  }

  return (
    <object
      data={link} 
      type="application/pdf" // TODO link won't work on github.io
      width="100%"
      height="99%"
    >
      <Typography variant="subtitle1" className={classes.message}>
        Rendering failed. <Link href={ link }>Download file</Link>.
      </Typography>
    </object>
  )
}