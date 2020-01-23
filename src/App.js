import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ReportPage from './containers/ReportWindow'
import ViewMap from './containers/ViewMap';
import NavBar from './containers/NavBar'



function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <p>
        alertATX
        </p>
        <ReportPage/> 
        {/* <ViewMap /> */}
       
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
