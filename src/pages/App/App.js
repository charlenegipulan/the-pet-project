import React, { Component } from 'react';
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';



class App extends Component {


  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div className="App">
        <LandingPage />
        <Switch>
          <Route exact path='/signup' render={(props) => 
            <SignupPage {...props}
                  
            />
          }/>
          <Route exact path='/login' render={() => 
            <LoginPage
                  
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
