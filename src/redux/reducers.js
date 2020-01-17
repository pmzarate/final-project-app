import { combineReducers } from 'redux'

const incidentReport = ( state = [], action) => {
    switch(action.type) {
        case 'ADD_REPORT':
            return [...state, action.value]
        default:
            return state
    }
}

export default combineReducers({incidentReport})