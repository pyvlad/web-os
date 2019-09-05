import React from 'react'
import MenuPresenter from './MenuPresenter'

export default (props) => {
  // drawer
  const [state, setState] = React.useState({ isOpen: false })
  const toggleDrawer = (isOpen) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ isOpen: isOpen })
  }

  // settings
  const [isSettingsMenuOpen, setSettingsMenuOpen] = React.useState(false)
  function handleSettingsMenuOpen() {
    setSettingsMenuOpen(true)
  }
  function handleSettingsMenuClose() {
    setSettingsMenuOpen(false)
  }
  
  return <MenuPresenter 
    {...props}
    isDrawerOpen={state.isOpen}
    toggleDrawer={toggleDrawer}
    isSettingsMenuOpen={isSettingsMenuOpen}
    handleSettingsMenuOpen={handleSettingsMenuOpen}
    handleSettingsMenuClose={handleSettingsMenuClose}
  />
}