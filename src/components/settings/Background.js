import React from 'react'
import { connect } from 'react-redux'
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
import { 
  setBackgroundType,
  setBackgroundColor, 
  setBackgroundImage 
} from '../../actions'


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}))


const Background = (props) => {

  const {
    backgroundType,
    backgroundColor, 
    backgroundImageUrl, 
    setBackgroundType,
    setBackgroundColor,
    setBackgroundImage
  } = props
  const classes = useStyles()
  const [state, setState] = React.useState({backgroundType, backgroundColor, backgroundImageUrl})

  const handleChange = (name) => ({target: {value}}) => {
    setState({
      ...state,
      [name]: value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setBackgroundType(state.backgroundType)
    setBackgroundColor(state.backgroundColor)
    setBackgroundImage(state.backgroundImageUrl)
  }

  return (
    <form>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Background Type</FormLabel>
        <RadioGroup
          aria-label="background-type"
          name="backgroundType"
          className={classes.group}
          value={state.backgroundType}
          onChange={handleChange('backgroundType')}
        >
          <FormControlLabel 
            value="color" 
            control={<Radio />} 
            label="Color" 
          />
          <TextField 
            disabled={ (state.backgroundType === "color") ? false : true } 
            label="Background Color"
            value={state.backgroundColor}
            onChange={handleChange('backgroundColor')}
          />
          <FormControlLabel 
            value="image" 
            control={<Radio />} 
            label="Image" 
          />
          <TextField 
            disabled={ (state.backgroundType === "image") ? false : true } 
            label="Background Image URL"
            value={state.backgroundImageUrl}
            onChange={handleChange('backgroundImageUrl')}
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

const mapStateToProps = (state) => (
  {
    backgroundType: state.backgroundType,
    backgroundColor: state.backgroundColor,
    backgroundImageUrl: state.backgroundImageUrl
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    setBackgroundType: (bgType) => dispatch(setBackgroundType(bgType)),
    setBackgroundColor: (color) => dispatch(setBackgroundColor(color)),
    setBackgroundImage: (url) => dispatch(setBackgroundImage(url)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Background)