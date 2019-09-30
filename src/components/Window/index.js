import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import WindowMobile from './WindowMobile'
import WindowRnd from './WindowRnd'

export default (props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (matches) 
    ? <WindowRnd {...props} />
    : <WindowMobile {...props} />
}