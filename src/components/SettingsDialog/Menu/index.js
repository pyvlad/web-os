import Menu from './Menu'
import { connect } from 'react-redux'

const mapStateToProps = (state) => (
  {
    bgType: state.background.type,
    bgColor: state.background.color,
    bgUrl: state.background.imageUrl
  }
)

export default connect(mapStateToProps)(Menu)