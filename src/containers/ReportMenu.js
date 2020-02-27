import { connect } from 'react-redux'
import ReportMenu from '../components/ReportMenu'
import { updateMarker } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        selectedMarker: state.selectedMarker
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateMarker: (marker) => dispatch(updateMarker(marker))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportMenu)