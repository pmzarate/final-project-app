import React, { Component }  from 'react'
import { Container, Paper, Chip } from '@material-ui/core'
import GoogleMapReact from "google-map-react"
import Geocode from "react-geocode";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SendIcon from '@material-ui/icons/Send';
import BarrierIcon  from '../alertatx_images/barrier.png';
import DebrisIcon from '../alertatx_images/debris.png';
import DogPoopIcon  from '../alertatx_images/dog_poop.png';
import HumanPoopIcon  from '../alertatx_images/human_poop.png';
import RestroomIcon  from '../alertatx_images/restroom.png';
import TentIcon from '../alertatx_images/tent.png';

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
console.log(mapView,'dfdfdfdeeeere') 
    return (
            <Container maxWidth="sm" className="business-container">
                {mapView.map(item=>{
                    let mark
                    if(item.marker ==="BarrierIcon"){
                        mark = <img src={BarrierIcon}></img>
                    }
                    return(
                        <paper>
                            <h6> Name: {item.username}</h6>
                            <h6> Description: {item.comments}</h6>    
                            {mark}   
            
                </paper>
               )})}
                
            <Container style = {{ height: "300px", width: "350px"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_KEY}}
                    center={mapProps.center}
                    zoom={mapProps.zoom}
                >
                <MapMarker 
                    lat={mapView.latitude}
                    lng={mapView.longitude}
                    text={mapView.comment}/>
                </GoogleMapReact>
            </Container>
        </Container>  
    )
}

export default ViewMap
