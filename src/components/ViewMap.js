import React, { Component, Fragment , useState } from "react";
import { Container, Paper, Chip } from "@material-ui/core";
import '../App.css'
import Geocode from "react-geocode";

import BarrierIcon from "../alertatx_images/barrier.png";
import DebrisIcon from "../alertatx_images/debris.png";
import AnimalIcon from "../alertatx_images/animal.png";
import BioIcon from "../alertatx_images/biohazard.png";
import RestroomIcon from "../alertatx_images/restroom.png";
import TentIcon from "../alertatx_images/tent.png";
import StreetLightIcon from "../alertatx_images/streetlight.png";
import ReactMapGL, {Marker} from "react-map-gl"
import CrimeIcon from '../alertatx_images/crime.png'


export default function ViewMap() {
    const [viewport,setViewport] = useState({
		latitude: 30.266666,
		longitude: -97.733330,
		width: '100vw',
		height: '100vh',
		zoom: 13
	})
	
	// map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png', function(error, image) {
	// 	if (error) throw error;
	// 	if (!map.hasImage('cat')) map.addImage('cat', image);
	//  })

	return (
	    <div>
			<ReactMapGL
			    {...viewport}
				mapboxApiAccessToken="pk.eyJ1IjoicG16YXJhdGUiLCJhIjoiY2s1eGFtaTV2MjN4eDNsbm5vaWo2dHZ0aSJ9.5CccB5S-XxghM8OUs2Dj-g"
			// mapStyle='mapbox://styles/pmzarate/ck5xcrcma6fht1inx5knt6xgt'
				onViewportChange={viewport => {
			    setViewport(viewport)
				}}
				>
			        <Marker latitude={30.266666} longitude={-97.733330} offsetLeft={-20} offsetTop={-10}>
					<img src={TentIcon}  width= "30px" height='30px'/>
                    </Marker>
					<Marker latitude={30.2651304} longitude={-97.7312843} offsetLeft={-20} offsetTop={-10}>
					<img src={TentIcon} width= "30px" height='30px' />
                    </Marker>
					<Marker latitude={30.2632307} longitude={-97.7340522} offsetLeft={-20} offsetTop={-10}>
					<img src={TentIcon} width= "30px" height='30px'/>
                    </Marker>
					<Marker latitude={30.267351} longitude={-97.734087} offsetLeft={-20} offsetTop={-10}>
					<img src={TentIcon} width= "30px" height='30px'/>
                    </Marker>
					<Marker latitude={30.261876} longitude={-97.745234} offsetLeft={-20} offsetTop={-10}>
					<img src={BioIcon} width= "30px" height='30px'/>
                    </Marker>
					<Marker latitude={30.261042} longitude={-97.758130} offsetLeft={-20} offsetTop={-10}>
					<img src={BioIcon} width= "30px" height='30px'/>
                    </Marker>
					<Marker latitude={30.247474} longitude={-97.734423} offsetLeft={-20} offsetTop={-10}>
					<img src={DebrisIcon} width= "30px" height='30px'/>
                    </Marker>
					<Marker latitude={30.251156} longitude={-97.735040} offsetLeft={-20} offsetTop={-10}>
					<img src={CrimeIcon} width= "30px" height='30px'/>
                    </Marker>
			</ReactMapGL>
     	</div>
	)
}
// const mapIcon = marker => {
// 	if (marker === "DebrisIcon") {
// 		return <DebrisIcon />;
// 	} else if (marker === "StreetLightIcon") {
// 		return <StreetLightIcon />;
// 	} else if (marker === "AnimalIcon") {
// 		return <AnimalIcon />;
// 	} else if (marker === "BarrierIcon") {
// 		return <BarrierIcon />;
// 	} else if (marker === "RestroomIcon") {
// 		return <RestroomIcon />;
// 	} else if (marker === "TentIcon") {
// 		return <TentIcon />;
// 	} else if (marker === "BioIcon") {
// 		return <BioIcon />;
// 	} else {
// 		return <LocationOnIcon />;
// 	}
// };

// const MapMarker = marker => <div>{mapIcon(marker)}</div>;

// const ViewMap = props => {
// 	console.log("props", props);
// 	// const id = props.match.params.id
// 	const mapView = props.incidentReport;

// 	const mapProps = {
// 		center: {
// 			lat: props.lat,
// 			lng: props.lng
// 		},
// 		zoom: 13
// 	};

// 	console.log(mapProps.center);
// 	console.log(mapView);
// 	return (
// 		// <div>console.log(mapProps.center)
// 		// console.log(mapView) </div>
// 		<Fragment>
// 			<div className="map-page">
// 				<Container>
// 					{mapView.map(item => {
// 						let mark;
// 						if (item.marker === "BarrierIcon") {
// 							mark = <img src={BarrierIcon}></img>;
// 						}
// 						return (
// 							<p>
// 								<h6> Name: {item.username}</h6>
// 								<h6> Description: {item.comments}</h6>
// 								<MapMarker />
// 							</p>
// 						);
// 					})}
// 				</Container>
// 				<Container style={{ height: "400px", width: "400px" }}>
// 					<GoogleMapReact
// 						bootstrapURLKeys={{ key: process.env.REACT_APP_KEY }}
// 						center={mapProps.center}
// 						zoom={mapProps.zoom}
// 						// onChildMouseEnter={}
// 					>
// 						<Marker
// 							lat={mapView.latitude}
// 							lng={mapView.longitude}
// 							name="My Marker"
// 							color="blue"
// 						/>
// 						{/* <MapMarker 
//                     lat={mapView.latitude}
//                     lng={mapView.longitude}
//                     text={mapView.comment}/> */}
// 					</GoogleMapReact>
// 				</Container>
// 			</div>
// 		</Fragment>
// 	);
// };

// export default ViewMap;

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1IjoicG16YXJhdGUiLCJhIjoiY2s1dnZweWJ6MDBwNzNma2owc3dicWpkYSJ9.t8V4O3lp5QCJr7A1Z4d-HQ';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });
