import React from 'react'
import MenuDrawer from './MenuDrawer'
import MenuList from './MenuList'


export default (props) => {
  const { handleWindowCreate } = props

  return (
    <MenuDrawer>
      <MenuList handleWindowCreate={ handleWindowCreate } />
    </MenuDrawer>
  )
}

