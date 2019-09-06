import Dialog from  './Dialog'
import { connect } from 'react-redux'
import { setIsSettingsMenuOpen } from '../../actions'


const mapStateToProps = (state) => (
  {
    isOpen: state.isSettingsMenuOpen
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    handleClose: () => dispatch(setIsSettingsMenuOpen(false))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)