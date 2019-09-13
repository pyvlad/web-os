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
      type="application/pdf"
      width="100%"
      height="98%" // TODO hide right scrollbar
    >
      <Typography variant="subtitle1" className={classes.message}>
        Rendering failed. <Link href={ link }>Download file</Link>.
      </Typography>
    </object>
  )
}