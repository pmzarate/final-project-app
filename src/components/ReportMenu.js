import React, { Component, Fragment } from "react";
import '../App.css'
import { Button, Divider } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import BarrierIcon from "../alertatx_images/barrier.png";
import DebrisIcon from "../alertatx_images/debris.png";
import AnimalIcon from "../alertatx_images/animal.png";
import BioIcon from '../alertatx_images/biohazard.png'
import RestroomIcon from "../alertatx_images/restroom.png";
import TentIcon from "../alertatx_images/tent.png";
import StreetLightIcon from "../alertatx_images/streetlight.png";
import CrimeIcon from '../alertatx_images/crime.png'


export default function ReportMenu(props) {

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
    // const marker= props.marker;

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
 
	const markerChoice = (e) =>	{
	props.updateMarker(e.target.name)
	debugger
	}
	
    //const toggleMarker=> {
	  // this.setState({marker:marker})
	//};
  
	return (
		<div>
	        <Fragment>
			<Button class="menu-btn"
				aria-controls="report-menu"
				aria-haspopup="true"
				onClick={handleClick}>
				Report It!
			</Button>
		    	<Menu
			    	id="report-menu"
			    	anchorEl={anchorEl}
			     	keepMounted
				    open={Boolean(open)}
			     	onClose={handleClose}
			    	TransitionComponent={Fade}>
	                    <MenuItem onClick = {markerChoice}
					    	name="debris">
							 <img src={DebrisIcon}
					            width='20'
					        	height='20'
					        	alt="debris"/>
				               	Debris / Garbage
			          	</MenuItem>
		      	</Menu>
			     	<Divider />

				{/* <MenuItem onClick={markerChoice}>
					<img src={StreetLightIcon} 
					    value="streetlight"
						width='20'
						height='20'
						alt="streetlight">
					</img>
					Street Light Outage
				</MenuItem>
			    	<Divider />

				<MenuItem onClick={markerChoice}>
					<img src={AnimalIcon}
				        value={this.state.marker}
				    	width='20'
				    	height='20'
				    	alt="animal">
					</img> 
					Vicious Animal / Waste / Carcass 
				</MenuItem>
			     	<Divider />

			    <MenuItem onClick={markerChoice}>
					<img src={BarrierIcon}
				        value={this.state.marker}
						width='20'
						height='20'
						alt="barrier">
					</img> 
					Sidewalk / Trail Damage
				</MenuItem>
		     		<Divider />

			    <MenuItem onClick={markerChoice}>
					<img src={RestroomIcon}
					    value={this.state.marker}
						width='20'
						height='20'
						alt="restroom">
					</img> 
					Public Restroom Access
				</MenuItem>
     			    <Divider />

				<MenuItem onClick={markerChoice}>
					<img src={TentIcon}
					    value={this.state.marker}
						width='20'
						height='20'
						alt="tent">
					</img>  
					Public Camping / Vagrancy
				</MenuItem>
			    	<Divider />

				<MenuItem onClick={markerChoice}>
					<img src={BioIcon}
					    value={this.state.marker}
						width='20'
						height='20'
						alt="bio">
					</img> 
					Bodily Fluids / Waste
				</MenuItem>
    		      	<Divider />

				<MenuItem onClick={markerChoice}>
					<img src={CrimeIcon}
					    value={this.state.marker}
						width='20'
						height='20'
						alt="crime">
					</img>  
					Violent / Lewd Behavior
				</MenuItem> */}
			</Fragment>
		</div>
    )
}

