import React from "react";
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
import LewdIcon from '../alertatx_images/lewd.png'
import CrimeIcon from '../alertatx_images/crime.png'
//import ReportWindow from "./ReportWindow";

export default function ReportMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button class="menu-btn"
				// variant="contained"
				//aria-controls="report-menu"
				//aria-haspopup="true"
				onClick={handleClick}
			>
				Report It!
			</Button>
		    	<Menu
				id="report-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			  	>
	            <MenuItem onClick={() => {
				    	props.toggleDialog();
						props.toggleMarker("DebrisIcon");
					}}
				>
					<img src={DebrisIcon}
						width='20'
						height='20'
						alt="debris"
						>
					</img>Debris / Garbage
				</MenuItem>
			    	<Divider />
				<MenuItem onClick={() => {
						props.toggleDialog();
						props.toggleMarker("StreetLightIcon");
					}}
				>
					<img src={StreetLightIcon} 
						width='20'
						height='20'
						alt="streetlght">
					</img>Street Light Outage
				</MenuItem>
			    	<Divider />
				<MenuItem
					onClick={() => {
						props.toggleDialog();
						props.toggleMarker("AnimalIcon");
					}}
				>
					<img src={AnimalIcon}
					width='20'
					height='20'
					alt="animal">
					</img> Vicious Animal / Waste / Carcass 
				</MenuItem>
			     	<Divider />
			    <MenuItem onClick={() => {
						props.toggleDialog();
						props.toggleMarker("BarrierIcon");
					}}
				>
					<img src={BarrierIcon} 
						width='20'
						height='20'
						alt="barrier">
					</img> Sidewalk / Trail Damage
				</MenuItem>
		     		<Divider />
			    <MenuItem onClick={() => {
						props.toggleDialog();
						props.toggleMarker("RestroomIcon");
					}}
				>
					<img src={RestroomIcon} 
						width='20'
						height='20'
						alt="restroom">
					</img> Public Restroom Access
				</MenuItem>
				    <Divider />
				<MenuItem onClick={() => {
						props.toggleDialog();
						props.toggleMarker("TentIcon");
					}}
				>
					<img src={TentIcon} 
						width='20'
						height='20'
						alt="tent">
					</img>  Public Camping / Vagrancy
				</MenuItem>
			    	<Divider />
				<MenuItem onClick={() => {
						props.toggleDialog();
						props.toggleMarker("BioIcon");
					}}
				>
					<img src={BioIcon} 
						width='20'
						height='20'
						alt="bio">
					</img> Bodily Fluids / Waste
				</MenuItem>
			      	<Divider />
				<MenuItem onClick={() => {
						props.toggleDialog();
						props.toggleMarker("CrimeIcon");
					}}
				>
					<img src={CrimeIcon} 
						width='20'
						height='20'
						alt="bio">
					</img>  Violent / Lewd Behavior
				</MenuItem>
			</Menu>
		</div>
	);
}
