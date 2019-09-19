import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Typography, Link } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  message: {
    padding: theme.spacing(1)
  }
}))


export default (props) => {
  const { fileUrl } = props
  const classes = useStyles()

  if (!fileUrl) {
    return <Typography variant="subtitle1" component="p" className={classes.message}>
      Please select a file to show. Note: this viewer will use PDF viewer 
      built into your browser, if there is any.
    </Typography>
  }

  return (
    <object
      data={ fileUrl } 
      type="application/pdf"
      width="100%"
      height="100%"
    >
      <Typography variant="subtitle1" component="p" className={classes.message}>
        Rendering failed. <Link href={ fileUrl }>Download file</Link>.
      </Typography>
    </object>
  )
}