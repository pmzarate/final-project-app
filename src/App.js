import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReportPage from './containers/ReportPage'
//import NavBar from './containers/NavBar'
// import Router from './Router'
// import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './redux/store'


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        ATXcrement
        </p>
        <ReportPage/>
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
