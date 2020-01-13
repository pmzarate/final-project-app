
import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
  incidentReport: state.incidentReport
  });

export default withRouter(connect(mapStateToProps, null)(NavBar));