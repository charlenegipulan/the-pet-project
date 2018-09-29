import React, { Component } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import {
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
