import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
	const style = {
		backgroundColor: "black",
		size: "30",
		height: "50",
		color: "white",
		textDecoration: "none"
	};

	return (
		<AppBar position="relative" className="nav-list" style={style}>
			<Toolbar>

		     	<ul className="nav-list-item">
					<Link to="/" style={style}>
						Home
					</Link>
				</ul>

				<ul className="nav-list-item">
					<Link to="/viewmap" style={style}>
						View Current Map
					</Link>
				</ul>

				<ul className="nav-list-item">
					<Link to="/about" style={style}>
						About AlertATX
					</Link>
				</ul>
				<ul className="nav-list-item">
					<Link to="/login" style={style}>
						Log In
					</Link>
				</ul>
				{/* </>
                        ):(
                            <li className="nav-list-item">
                                <Link to="/login" style={style}> Login</Link>
                            </li>
                        )}  */}
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
