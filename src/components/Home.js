import React from "react";
//import logo from './logo.svg';
import '../App.css'
import ReportMenu from './ReportMenu';
// import NavBar from './NavBar';
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <NavBar /> */}
			</header>
			<div>
				<h1>alertATX</h1>
				<p>
					<h2>Stay ALERT</h2>
					<br />
					See Something... Report It
				</p>
			</div>

			{/* this is how to make a link in your app 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}

			<br />
			<ReportMenu />
		</div>
	);
}

export default Home;
