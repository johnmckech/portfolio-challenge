import React from 'react';
import Header from './components/Header';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src= "screenshot.png" className="App-logo" alt="logo" />
        <p>
          John <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          to="/"
        >
         Home 
        </Link>
        <Link
          className="App-link"
          to="/about"
        >
         About 
        </Link>
      </header>
      <Switch>
        <Route exact={true} path="/">
          <Header name='john'/>
        </Route>
        <Route path="/about">
          <div>
            <h2>about me</h2>
            <p>I'm John and I like sports</p>
          <Header name='michael'/></div>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
