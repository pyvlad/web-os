/* 
Desktop.js contains plain standalone Desktop component. 
The component is connected to Redux in index.js. 
*/
import DesktopStateful from './DesktopStateful'
import { connect } from 'react-redux'
import { setDesktopSize } from '../../actions'


const mapStateToProps = (state) => (
  {
    bgType: state.backgroundType,
    bgColor: state.backgroundColor,
    bgUrl: state.backgroundImageUrl
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    setDesktopSize: (width, height) => dispatch(setDesktopSize(width, height))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(DesktopStateful)