import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { 
  TextField,
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
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
  }

  return (
    <form>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Background Type</FormLabel>
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
        <FormHelperText>You can configure your background here.</FormHelperText>
        <button onClick={handleSubmit}>
          Save
        </button>
      </FormControl>
      
    </form>
  )
}