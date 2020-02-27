import { connect } from 'react-redux'
import ReportWindow from '../components/ReportWindow'
import { addIncidentReport } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        incidentReport: state.incidentReport,
        selectedMarker: state.selectedMarker
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addIncidentReport: (incidentReport) => dispatch(addIncidentReport(incidentReport))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportWindow)