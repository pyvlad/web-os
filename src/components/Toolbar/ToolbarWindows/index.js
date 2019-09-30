import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Buttons from  './Buttons'
import CollapsedList from './CollapsedList'


export default (props) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (matches) 
    ? <Buttons {...props} />
    : <CollapsedList {...props} />
}