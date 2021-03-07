import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import letterDict from "./LetterTemplates/letters.js";
import queryString from 'query-string';

export default function IEPBotTomPages() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/sendEmail" component={SendEmail}>
        </Route>
      </Switch>
    </Router>
  );
}
function App() {
  const API_KEY = process.env.REACT_APP_BOT_API_KEY;
  const iFrameStlye = {
    "min-width": "250px",
    "width": "100%",
    "min-height": "500px",
    "height": "100%"
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Tom the IEP Assistant</h1>
      </header>
      <h2>Tom is hear to walk you through the progres of getting an IEP set up for yourself or somebody else in addition to reaching out if it is not being followed.
      </h2>
      <iframe src={'https://webchat.botframework.com/embed/A11yIEPBotTomHack?s=' + API_KEY} style={iFrameStlye}></iframe>
    </div>
  );
}
class SendEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childName: "", requestorName: "", facultyName: "", facultyEmail: "", path: "" };
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    console.log(values.filter) // "top"
    console.log(values.origin) // "im"
  }
  render() {
    if (this.state.path != "") {
      let email = letterDict[this.state.path];
      email=email.replace('/${user.facultyName}/g', this.state.facultyName);
      email=email.replace('/${user.userName}/g', this.state.requestorName);
      email=email.replace('/${user.childName}/g', this.state.childName);
      let subject = "";
      switch (this.state.path) {
        case 'BehalfCreate':
          subject = 'Discussion of an IEP for ' + this.state.childName;
          break;
        case 'BehalfDenial':
          subject = 'Request of written IEP Denial for ' + this.state.childName;
          break;
        case 'BehalfExam':
          subject = 'Requesting a comprehnesive, education evaulation of ' + this.state.childName + ' for an IEP';
          break;
        case 'BehalfEnforce':
          subject = 'Discussion of ' + this.state.childName + "'s IEP and its requirements";
          break;
        case 'SelfCreate':
          subject = 'Discussion of an IEP for me';
          break;
        case 'SelfDenial':
          subject = 'Request of written IEP Denial for myself';
          break;
        case 'SelfExam':
          subject = 'Requesting a comprehnesive, education evaulation of myself for an IEP'
          break;
        case 'SelfEnforce':
          subject = 'Discussion of my IEP and its requirements';
          break;
      }
      subject=subject.replace('/ /g',"%20");
      subject=subject.replace('/,/g',"%2C");
      subject=subject.replace('/./g',"%2E");
      subject=subject.replace("/'/g","%27");
      
      email=email.replace('/ /g',"%20");
      email= email.replace('/\n/g',"%0D%0A");
      email= email.replace('/\t/g',"%09");
      email=   email.replace('/,/g',"%2C");
      email=   email.replace('/./g',"%2E");
      email=   email.replace("/'/g","%27");
      email=  email.replace("/-/g","%2D");
      email=     email.replace("/!/g","%21");
      email=    email.replace("///g","%2F");
      email=    email.replace("/(/g","%28");
      email=     email.replace("/)/g","%29");

      return (
        <div className="App">

          <header className="App-header">
            <h1> Tom the IEP Assistant</h1>
          </header>
          <a href={"mailto:"+this.state.facultyEmail.trim()+"?subject="+subject+"&body="+email}>Open Email App</a></div>
      );
    } else {
      return (
        <div className="App">

          <header className="App-header">
            <h1> Tom the IEP Assistant</h1>
          </header>
          <h2> Prcoessing the request now.</h2></div>
      );
    }
  }
}

