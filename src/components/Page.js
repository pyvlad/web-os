import React from 'react'
import Layout from './Layout'
import Desktop from './Desktop'
import Toolbar from './Toolbar'
import AppMenu from './AppMenu'
import AppMenuList from './AppMenuList'
import SettingsDialog from './SettingsDialog'
import Clock from './Clock'
import Window from './Window'
import EmbeddedApp from './EmbeddedApp'


// TODO: refactor to get rid of this here 
import { Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { setIsSettingsMenuOpen } from '../actions'
const mapDispatchToProps = (dispatch) => (
  {
    openSettingsDialog: () => dispatch(setIsSettingsMenuOpen(true))
  }
)
const getWindowName = (() => {
  let counter = 0
  return () => {
    return "Example #" + (++counter)
  }
})()


const Page = (props) => {
  const {
    windows,
    selectedWindow,
    handleWindowCreate,
    handleWindowClose,
    handleWindowSelect,
    handleWindowHide
  } = props

  const desktop = <Desktop>
    {
      windows.map((w) => <Window 
        key={w.id}
        title={w.title}
        zIndex={w.zIndex}
        handleClose={() => handleWindowClose(w.id)}
        handleSelect={() => handleWindowSelect(w.id)}
        handleHide={() => handleWindowHide(w.id)}
        isSelected={w.id === selectedWindow}
      >
        <EmbeddedApp name={w.appName} />
      </Window>)
    }
  </Desktop>

  const toolbar = <Toolbar>
    <AppMenu>
      <AppMenuList 
        openSettingsDialog={ props.openSettingsDialog }
        openExampleWindow={ () => handleWindowCreate(getWindowName(), "example") }
      />
    </AppMenu>
    <div>
      {
        windows.map((w) => (
          <Button 
            variant="contained"
            color="primary"
            size="small"
            style={{marginRight: 10}}
            key={w.id} 
            onClick={() => handleWindowSelect(w.id)}
          >
            {w.title}
          </Button>
        ))
      }
    </div>
    <Typography variant="subtitle2">
      <Clock />
    </Typography>
  </Toolbar>
  
  return (
    <React.Fragment>
      <Layout 
        desktop={desktop}
        toolbar={toolbar}
      />
      <SettingsDialog />
    </React.Fragment>
  )
}

export default connect(undefined, mapDispatchToProps)(Page)