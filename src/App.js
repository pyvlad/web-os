import React from 'react'
import 'typeface-roboto' 
// This import injects style tag in head with @font-face rules
import Typography from '@material-ui/core/Typography' 
// When used in component Typography component leads to a new style tag 
// in <head> with all specific CSS classes, 
// e.g. '.MuiTypography-root', '.MuiTypography-body1', etc., 
// i.e. CSS classes for each variant (with Roboto as first font-family)
import Icon from '@material-ui/core/Icon'
// Icon lets us use font icons (connected in advance manually in index.html)
import { AccessAlarm } from '@material-ui/icons'
// SVG icons from special package
import { makeStyles } from '@material-ui/core/styles'
// We need this package to use MUI's CSS-in-JS styling solution
// https://material-ui.com/styles/basics/
// Here, we use Hook API to generate and apply component styles
// alternatives: Styled Components (via 'styled') and HOC (via 'withStyles')
import { ThemeProvider } from '@material-ui/styles'
import customTheme from './themes'
// Material-UI components come with a default theme
// To customize the theme we need to use ThemeProvider 
// to inject a new theme
import CssBaseline from '@material-ui/core/CssBaseline'
// reset some default browser CSS styles (margins, box sizing, background color, fonts) 
// https://material-ui.com/components/css-baseline/


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "yellow"
  }
}));

export default () => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <h1>Web OS</h1>
        <div>
          <Typography variant="h1">
            Web OS
          </Typography>
          <Icon>star</Icon>
          <AccessAlarm />
        </div>
      </div>
    </ThemeProvider>
  )
}