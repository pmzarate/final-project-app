import React from "react";
//import logo from './logo.svg';
import "../App.css";
import ReportMenu from "./ReportMenu";
// import NavBar from './NavBar';
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="App">
			<header className="App-header">{/* <NavBar /> */}</header>
			<div className='app-title'>
			    <h1>alertATX</h1>
			    <h2> Be AWARE - Stay ALERT</h2>	
		    </div>		
			<section>				
			    <h2>When YOU See It... <ReportMenu />
				</h2>
				</section>
		

			{/* this is how to make a link in your app 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}

			{/* <br />
			 */}
			</div>
	);
}

export default Home;
