import React from 'react'
import 'typeface-roboto'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../reducer'
import customTheme from '../themes'
import Page from './page/Page'

const reduxStore = createStore(reducer)


export default () => {
  return (
    <Provider store={reduxStore} >
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Page />
      </ThemeProvider>
    </Provider>
  )
}