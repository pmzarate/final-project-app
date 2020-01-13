import { connect } from 'react-redux'
import ReportPage from '../components/ReportPage'
import { addIncidentReport } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        incidentReport: state.incidentReport
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIncidentReport: (incidentReport) => dispatch(addIncidentReport(incidentReport))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportPage)