import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const API_KEY = process.env.REACT_APP_BOT_API_KEY;
console.log(API_KEY);
  const iFrameStlye = {
    "min-width": "400px", 
    "width": "100%", 
    "min-height": "500px",
    "height":"100%"
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Tom the IEP Assistant</h1>
      </header>
      <h2>Tom is hear to walk you through the progres of getting an IEP set up for yourself or somebody else in addition to reaching out if it is not being followed.
      </h2>
      <iframe src={'https://webchat.botframework.com/embed/A11yIEPBotTomHack?s='+API_KEY} style={iFrameStlye}></iframe>
    </div>
  );
}

export default App;
