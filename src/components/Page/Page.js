import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Desktop from './Desktop'
import Toolbar from './Toolbar'
import Window from "../Window"


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
  const { 
    windows, 
    activeWindow, 
    handleWindowCreate, 
    handleWindowClose, 
    handleWindowSelect 
  } = props
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.desktop}>
        <Desktop>
          {
            windows.map((w) => <Window 
              key={w.id}
              title={w.title} 
              zIndex={w.id === activeWindow ? 1 : 0 }
              handleClose={() => handleWindowClose(w.id)} 
              isSelected={w.id === activeWindow}
            >
              { w.contentComponent }
            </Window>)
          }
        </Desktop>
      </div>
      <div className={classes.toolbar}>
        <Toolbar 
          windows={windows} 
          handleWindowCreate={handleWindowCreate} 
          handleWindowSelect={handleWindowSelect}
        />
      </div>
    </div>
  )
}