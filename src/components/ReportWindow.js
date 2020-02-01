import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import '../App.css'
import {
	Button,
	TextField,
	Dialog,
	DialogContent
} from "@material-ui/core";

// import ReportMenu from "./ReportMenu";
import ViewMap from "../containers/ViewMap";
//import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import ReactMapGL from "react-map-gl"
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BarrierIcon from "../alertatx_images/barrier.png";
import DebrisIcon from "../alertatx_images/debris.png";
import AnimalIcon from "../alertatx_images/animal.png";
import BioIcon from '../alertatx_images/biohazard.png'
import RestroomIcon from "../alertatx_images/restroom.png";
import TentIcon from "../alertatx_images/tent.png";
import StreetLightIcon from "../alertatx_images/streetlight.png";


class ReportWindow extends Component {
	state = {
		open: false,
		username: "",
		comments: "",
		lat: "",
		lng: "",
		iconmarker: "",
		dt: ""
		
	}

	toggleDialog = () => 
		this.setState({ open: !this.state.open });
	

    toggleMarker = (iconmarker) =>
    this.setState({iconmarker: iconmarker})
  

	handleTextChange = e => {
		const newState = { ...this.state };
		newState[e.target.id] = e.target.value;
		console.log(newState);
		this.setState(newState);
	};

	handleSubmit = e => {
		e.preventDefault();
		const newReport = { ...this.state };
		newReport.id =
			this.props.incidentReport[this.props.incidentReport.length - 1].id + 1;
		this.props.addIncidentReport(newReport);
		this.props.history.push("/");
	};

	showPosition = position => 
		this.setState({
			lat: position.coords.latitude,
			lng: position.coords.longitude
		});
	

	getLocation = () => {
		const success = pos => {
			console.log(pos.coords);
			this.setState({
				lat: pos.coords.latitude,
				lng: pos.coords.longitude,
        timestamp: pos.timestamp,
        open: false
			});
			// debugger
			return pos.coords;
		};
		const coords = navigator.geolocation.getCurrentPosition(success);
	};

	geoError = () => {
		console.log("Position Not Found, You're nowhere");
	};

  render() {
        // if(this.state.lat !== "") {
		  // console.log('this is the state on render ', this.state)
	    return (
	        <Fragment>
				<div 
					style={{ textAlign: 'center'}}
					className="add-report">
                {/* <p>Report Submitted</p> */}
                {/* <ViewMap lat={this.state.lat} 
                lng={this.state.lng}/>
                } else {       
                return ( */}
		        {/* <Button 
                    // variant="contained"
                    className="add-report"
                    onClick={this.toggleDialog}
                    >
                    Report it
                </Button> */}
				</div>
				<div>
					<Dialog 
					    open={this.state.open} 
                        onClose={this.toggleDialog}>
                            <DialogContent>
                                <form 
                                    onSubmit={this.handleSubmit}
                                    style={{ flexDirection: "column",
                                    width: "350px"
                                    }}>
                                    <TextField
										id="username"
										palceholder="Posted by: "
                                        value={this.state.username}
                                        onChange={this.handleTextChange}
                                        required/>
                                    <TextField
                                        id="comments"
                                        placeholder="Describe Incident"
                                        value={this.state.comments}
                                        onChange={this.handleTextChange}
                                        required/>
                                    <Button 
                                        // variant="primary"
                                        className="geolocation"
                                        color="secondary"
                                        type="submit"
                                        onClick={this.getLocation}>
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
