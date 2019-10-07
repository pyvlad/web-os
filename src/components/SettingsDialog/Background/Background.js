import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel,
  Snackbar
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 600,
    padding: theme.spacing(3)
  },
  formControl: {
    margin: "auto"
  },
  group: {
    margin: theme.spacing(1, 0),
  },
  button:{ 
    maxWidth: 200
  }
}))


export default (props) => {

  const {
    bgType,
    bgColor, 
    bgUrl, 
    setBackgroundType,
    setBackgroundColor,
    setBackgroundImage
  } = props
  const classes = useStyles()
  const [state, setState] = React.useState({bgType, bgColor, bgUrl})
  const [isSnackbarOpen, setSnackbarOpen] = React.useState(false)

  const handleChange = (name) => ({target: {value}}) => {
    setState({
      ...state,
      [name]: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setBackgroundType(state.bgType)
    setBackgroundColor(state.bgColor)
    setBackgroundImage(state.bgUrl)
    setSnackbarOpen(true)
  }

  return (
    <React.Fragment>
      <form className={classes.container}>
        <FormControl component="fieldset" className={classes.formControl} fullWidth>
          <FormLabel component="legend">Background Type</FormLabel>
          <FormHelperText>You can configure desktop background here.</FormHelperText>
          <RadioGroup
            aria-label="background-type"
            name="backgroundType"
            className={classes.group}
            value={state.bgType}
            onChange={handleChange('bgType')}
          >
            <FormControlLabel 
              value="color" 
              control={<Radio />} 
              label="Color" 
            />
            <TextField 
              disabled={ (state.bgType === "color") ? false : true } 
              label="Background Color"
              value={state.bgColor}
              onChange={handleChange('bgColor')}
            />
            <FormControlLabel 
              value="image" 
              control={<Radio />} 
              label="Image" 
            />
            <TextField 
              disabled={ (state.bgType === "image") ? false : true } 
              label="Background Image URL"
              value={state.bgUrl}
              onChange={handleChange('bgUrl')}
            />
          </RadioGroup>
          <Button variant="contained" color="primary" className={classes.button} 
              onClick={handleSubmit}>
            Save
          </Button>
        </FormControl>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={isSnackbarOpen}
        autoHideDuration={2000}
        onClose={() => {setSnackbarOpen(false)}}
        message={<span>Settings updated.</span>}
      />
    </React.Fragment>
  )
}