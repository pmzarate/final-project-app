import { combineReducers } from 'redux'

const incidentReport = ( state = [], action) => {
    switch(action.type) {
        case 'ADD_REPORT':
            debugger
            return [...state, action.value]
        default:
            return state
    }
}

const selectedMarker = ( state = '', action) => {
    switch (action.type) {
        case 'SELECT_MARKER':
            return action.value
        default:
            return state
    }
}

export default combineReducers({incidentReport, selectedMarker})