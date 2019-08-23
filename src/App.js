import React from 'react'
import 'typeface-roboto'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import customTheme from './themes'
import Page from './Page'

export default () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  )
}