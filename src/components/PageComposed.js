import React from 'react'
import PageLayout from './PageLayout'
import Desktop from './Desktop'
import Toolbar from './Toolbar'
import SettingsDialog from './SettingsDialog'
import Window from './Window'
import EmbeddedApp from './EmbeddedApp'


export default (props) => {
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

  const toolbar = <Toolbar
    windows={windows}
    selectedWindowId={selectedWindow}
    handleWindowCreate={handleWindowCreate}
    handleWindowSelect={handleWindowSelect}
  />
  
  return (
    <React.Fragment>
      <PageLayout 
        desktop={desktop}
        toolbar={toolbar}
      />
      <SettingsDialog />
    </React.Fragment>
  )
}