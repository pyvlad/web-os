import WindowController from './WindowController'
import { connect } from 'react-redux'

const mapStateToProps = (state) => (
  {
    desktopWidth: state.desktopWidth,
    desktopHeight: state.desktopHeight
  }
)

export default connect(mapStateToProps)(WindowController)