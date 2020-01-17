import { connect } from 'react-redux'
import ViewMap from '../components/ViewMap'


const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    incidentReport: state.incidentReport
  }
}

export default connect(mapStateToProps)(ViewMap)