import Background from './Background'
import { connect } from 'react-redux'

import { 
  setBackgroundType,
  setBackgroundColor, 
  setBackgroundImage 
} from '../../../actions'

const mapStateToProps = (state) => (
  {
    bgType: state.backgroundType,
    bgColor: state.backgroundColor,
    bgUrl: state.backgroundImageUrl
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