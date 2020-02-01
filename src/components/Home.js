import React from "react";
//import logo from './logo.svg';
import "../App.css";
//import ReportMenu from "./ReportMenu";
// import NavBar from './NavBar';
//import { Link } from "react-router-dom";
import ReportWindow from "./ReportWindow";

function Home() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<div className="app-title">
				<h1>alertATX</h1>
				<h2> Be AWARE - Stay ALERT</h2>
			</div>
			<section>
				<div className= "inline-section">
					<h2>When YOU See It...</h2>
					<h3 className= "report-window"><ReportWindow /></h3>
				</div>
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
