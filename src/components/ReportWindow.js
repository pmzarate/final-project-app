import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import '../App.css'
import {
	Button,
	TextField,
	Dialog,
	DialogContent
} from "@material-ui/core";

import ReportMenu from "../containers/ReportMenu";
//import ViewMap from "../components/ViewMap";
import Geocoder from 'react-native-geocoding';
import Geocode from 'react-geocode'
import ReactMapGL, { Marker } from "react-map-gl"
//import LocationOnIcon from "@material-ui/icons/LocationOn";
//import BarrierIcon from "../alertatx_images/barrier.png";
//import DebrisIcon from "../alertatx_images/debris.png";
//import AnimalIcon from "../alertatx_images/animal.png";
//import BioIcon from '../alertatx_images/biohazard.png'
//import RestroomIcon from "../alertatx_images/restroom.png";
//import TentIcon from "../alertatx_images/tent.png";
//import StreetLightIcon from "../alertatx_images/streetlight.png";


class ReportWindow extends Component {
	state = {
		open: false,
		username: "",
		comments: "",
		lat: "",
		lng: "",
    	marker: "",
		dt: ""
	}

	toggleDialog = () => 
		this.setState({ open: !this.state.open });
	

    // toggleMarker = (label) =>
    //     this.setState({label:label});
  
	 componentWillMount() {
		 this.getLocation()
			 }

	handleTextChange = e => {
		const newState = { ...this.state };
		newState[e.target.id] = e.target.value;
		console.log(newState);
		this.setState(newState);
	};

	handleSubmit = e => {
		alert("Report submitted, Thank You");
		e.preventDefault();
		const newReport = { ...this.state }
		// debugger
		newReport.id = this.props.incidentReport[this.props.incidentReport.length - 1].id + 1
		    this.props.addIncidentReport(newReport)
		};

	// 
	

	getLocation = () => {
	
		const success = pos => {
			console.log(pos.coords);
			this.setState({
				lat: pos.coords.latitude,
				lng: pos.coords.longitude,
				marker: this.props.selectedMarker,
                dt: pos.timestamp,
                open:false
			});
		   
			return pos.coords;
		};
		const coords = navigator.geolocation.getCurrentPosition(success);
		
	};

	geoError = () => {
		console.log("Position Not Found, You're nowhere");
	};

  render() {
        // if(this.state.lat !== "") {
		  console.log('made it to reportwindow ', this.state)
	    return (
	        <Fragment>
				<div 
					style={{ textAlign: 'center'}}
					className="add-report">
			    <ReportMenu
			     	className="add-report"
					onClick={this.toggleDialog}
				    menuClick={() => {
						this.setState({
						    open:true
						});
					}}	/>
				
           		<Dialog 
					    open={this.state.open} 
                        onClose={this.toggleDialog}>
                            <DialogContent>
                                <form 
                                    onSubmit={this.handleSubmit}
                                    style={{ flexDirection: "column",
									width: "180px",
									height: "200px"
                                    }}>
                                    <TextField
										id="username"
										placeholder="Posted by: "
                                        value={this.state.username}
                                        onChange={this.handleTextChange}
                                        required/>
										<br/>
                                    <TextField
                                        id="comments"
                                        placeholder="Describe Incident"
                                        value={this.state.comments}
                                        onChange={this.handleTextChange}
                                        required/>
										<br/>
                                    <Button 
										// variant="primary"
										//onClick={this.getLocation}
                                        className="geolocation"
                                        color="secondary"
                                        type="submit"
                                        >
                                        Submit It 
										
                                    </Button>
                                </form> 
                            </DialogContent>
                    </Dialog> 
                </div>
		    </Fragment>
		)
    }

}

export default withRouter(ReportWindow)
