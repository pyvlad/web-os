import WindowRnd from './WindowRnd'
import { connect } from 'react-redux'

const mapStateToProps = (state) => (
  {
    desktopWidth: state.desktopWidth,
    desktopHeight: state.desktopHeight
  }
)

export default connect(mapStateToProps)(WindowRnd)