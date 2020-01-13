import { combineReducers } from 'redux'

const addIncidentReport = ( state = [], action) => {
    switch(action.type) {
        case 'ADD_REPORT':
            return [...state, action.value]
        default:
            return state
    }
}

export default combineReducers({addIncidentReport})