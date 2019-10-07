import Background from './Background'
import { connect } from 'react-redux'
import { setBackground } from '../../../actions'


const mapStateToProps = (state) => (
  {
    bgType: state.background.type,
    bgColor: state.background.color,
    bgUrl: state.background.imageUrl
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    setBackground: (background) => dispatch(setBackground(background))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Background)