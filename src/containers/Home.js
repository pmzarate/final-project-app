import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        incidentReport: state.incidentReport
    }
}

export default connect(mapStateToProps)(Home)