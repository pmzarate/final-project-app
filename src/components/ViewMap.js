import React, { Component }  from 'react'
import { Container, Paper, Chip } from '@material-ui/core'
import GoogleMapReact from "google-map-react"
import Geocode from "react-geocode";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SendIcon from '@material-ui/icons/Send';

const mapIcon = (icon) => {
    if (icon === 'dog') {
        return <SendIcon />
    } else if (icon === 'rabit') {
        return <SendIcon />
    } else {
        return <LocationOnIcon />
    }
}

const MapMarker = (icon) =>(
    <div>
        { 
            mapIcon(icon)
        }
    </div>
)
 
const ViewMap = (props) => {
    console.log('props', props)
    // const id = props.match.params.id
    const mapView = props.incidentReport


    const mapProps = {
        center: {
            lat: 0,
            lng: 0,
        },
        zoom: 13,
    };

console.log(mapProps.center)  
    return ( 
                 <Container maxWidth="sm" className="business-container">
            <h2> Name: {mapView.username}</h2>
            <br/>
            <h4> Description: {mapView.comments}</h4>       
            <h4> Description: {mapView.description}</h4>
            <br/>
            <Container style = {{ height: "300px", width: "350px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_KEY}}
                    center={mapProps.center}
                    zoom={mapProps.zoom}
                >
                    <MapMarker 
                        lat={mapView.latitude}
                        lng={mapView.longitude}
                        text={mapView.comment}
                    />
                </GoogleMapReact>
            </Container>
        </Container>  
    )
}

export default ViewMap
