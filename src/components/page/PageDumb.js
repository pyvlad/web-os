import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Desktop from './Desktop'
import Toolbar from './Toolbar'


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


const PageDumb = (props) => {
  const { windows, handleWindowCreate } = props
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.desktop}>
        <Desktop>
          { windows }
        </Desktop>
      </div>
      <div className={classes.toolbar}>
        <Toolbar handleWindowCreate={handleWindowCreate} />
      </div>
    </div>
  )
}


export default PageDumb