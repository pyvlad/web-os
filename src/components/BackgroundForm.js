import React from 'react'
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core'
import { setBackgroundColor, setBackgroundImage } from '../actions'


const BackgroundForm = (props) => {

  const {
    backgroundColor, 
    backgroundImageUrl, 
    setBackgroundColor,
    setBackgroundImage
  } = props

  const [state, setState] = React.useState({backgroundColor, backgroundImageUrl})

  const handleChange = (name) => ({target: {value}}) => {
    setState({
      ...state,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBackgroundColor(state.backgroundColor)
    setBackgroundImage(state.backgroundImageUrl)
  }

  return (
    <form>
      <TextField 
        label="Background Color"
        value={state.backgroundColor}
        onChange={handleChange('backgroundColor')}
      />
      <br />
      <TextField 
        label="Background Image URL"
        value={state.backgroundImageUrl}
        onChange={handleChange('backgroundImageUrl')}
      />
      <br />
      <button onClick={handleSubmit}>
        Save
      </button>
    </form>
  )
}

const mapStateToProps = (state) => (
  {
    backgroundColor: state.backgroundColor,
    backgroundImageUrl: state.backgroundImageUrl
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    setBackgroundColor: (color) => dispatch(setBackgroundColor(color)),
    setBackgroundImage: (url) => dispatch(setBackgroundImage(url)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundForm)