import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Link } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  message: {
    padding: theme.spacing(2)
  }
}))


export default (props) => {
  const { fileUrl } = props
  const classes = useStyles()

  if (!fileUrl) {
    return <Typography variant="h4" align="center" className={classes.message}>
      File Viewer
    </Typography>
  }

  return (
    <object
      data={ fileUrl } 
      type="application/pdf"
      width="100%"
      height="98%" // TODO hide right scrollbar
    >
      <Typography variant="subtitle1" className={classes.message}>
        Rendering failed. <Link href={ fileUrl }>Download file</Link>.
      </Typography>
    </object>
  )
}