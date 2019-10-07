/* 
Desktop.js contains plain standalone Desktop component. 
The component is connected to Redux in index.js. 
*/
import Desktop from './Desktop'
import { connect } from 'react-redux'


const mapStateToProps = (state) => (
  {
    bgType: state.background.type,
    bgColor: state.background.color,
    bgUrl: state.background.imageUrl
  }
)

export default connect(mapStateToProps)(Desktop)