import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MathsChat from './Components/MathsChat';
import EnglishChat from './Components/EnglishChat';
import ScienceChat from './Components/ScienceChat';
import ArtsChat from './Components/ArtsChat';
import Login from './Components/Login';

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Switch>
    <Route path="/" exact>
      <Login />
    </Route>
    <Route path = "/Home">
        <App />
   </Route>
    <Route path="/MathsChat">
      <MathsChat />
    </Route>
    <Route path="/ArtsChat">
      <ArtsChat />
    </Route>
    <Route path="/ScienceChat">
      <ScienceChat />
    </Route>
    <Route path="/EnglishChat">
      <EnglishChat />
    </Route>
  </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
