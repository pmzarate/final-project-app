export const addIncidentReport = (incidentReport) => {    
    return {
        type: 'ADD_REPORT',
        value: incidentReport
    }
}

export const updateMarker = (marker) => {
    return {
        type: 'SELECT_MARKER',
        value: marker
    }
}

