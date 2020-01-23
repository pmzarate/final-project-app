import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import {
	Button,
	TextField,
	Dialog,
	DialogContent,
	Menu,
	ListItemIcon,
	MenuItem
} from "@material-ui/core";
// import SendIcon from "@material-ui/icons/Send";
// import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state";

// import PopupState from "material-ui-popup-state";
import ReportMenu from "./ReportMenu";
import ViewMap from "../containers/ViewMap";

class ReportWindow extends Component {
	state = {
		open: false,
		username: "",
		comments: "",
		lat: "",
		lng: "",
		marker: "",
		timestamp: "",
		id: 0
	};

	toggleDialog = () => this.setState({ open: !this.state.open });

  toggleMarker = (marker) =>{
    this.setState({marker: marker})
  }
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

	showPosition = position => {
		this.setState({
			lat: position.coords.latitude,
			lng: position.coords.longitude
		});
	};

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
    if(this.state.lat !== ""){
      return (
        <div>
        <p>Report Submitted</p>
        <ViewMap/>
        </div>
      )
    }
    else{
      return (
        <Fragment>
          <ReportMenu toggleDialog={this.toggleDialog} toggleMarker={this.toggleMarker} />
          {console.log(this.state)}
          {/* <div style={{ textAlign: 'center' }}> */}
          {/* <Button
            variant="contained"
            className="add-report"
            onClick={this.toggleDialog}
          >
            Report it
          </Button> */}
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px"
                }}
              >
                <TextField
                  id="username"
                  placeholder="Reported by"
                  value={this.state.username}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="comments"
                  placeholder="Describe Incident"
                  value={this.state.comments}
                  onChange={this.handleTextChange}
                  required
                />
                <Button
                  variant="contained"
                  className="geolcation"
                  color="standard"
                  type="submit"
                  onClick={this.getLocation}
                >
                  Submit It
                </Button>
              </form>
            </DialogContent>
          </Dialog>
          {/* </div> */}
        </Fragment>
      );
    }
		
	}
}

export default withRouter(ReportWindow);
