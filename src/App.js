import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReportPage from './containers/ReportPage'
import ViewMap from './containers/ViewMap';
//import NavBar from './containers/NavBar'



function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        alert ATX
        </p>
        <ReportPage/> 
        <ViewMap />
        {/* <NavBar/> */}
        {/* this is how to make a link in your app 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
    </div>
  );
}

export default App;
