import Menu from './Menu'
import { connect } from 'react-redux'

const mapStateToProps = (state) => (
  {
    bgType: state.backgroundType,
    bgColor: state.backgroundColor,
    bgUrl: state.backgroundImageUrl
  }
)

export default connect(mapStateToProps)(Menu)