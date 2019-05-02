import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Home from './Home';
import Specialists from './Specialists';
import Resources from './Resources';
import Clinics from './Clinics';
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import Confirmation from './Confirmation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import css from './App.css';

class App extends Component {
  state = {
    users: [],
    specialists: [],
    clinics: [],
    currentUser: {
      id: null,
      firstName: null,
    },
  };

  componentDidMount() {
    this.setCurrentUser();
    axios
      .all([
        axios.get('api/v1/users'),
        axios.get('api/v1/specialists'),
        axios.get('api/v1/clinics'),
      ])
      .then(
        axios.spread((usersRes, specRes, clicRes) => {
          this.setState({
            users: usersRes.data,
            specialists: specRes.data,
            clinics: clicRes.data,
          });
        }),
      )
      .catch(error => console.log(error));
  }

  // Set the current user at login
  setCurrentUser = () => {
    this.setState({
      currentUser: {
        id: localStorage.getItem('user id'),
        firstName: localStorage.getItem('user name'),
      },
    });
  };

  // Reset the current user at logout
  resetCurrentUser = () => {
    this.setState({
      currentUser: {
        id: null,
        firstName: null,
      },
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Fragment>
              <Route path="/" component={Home} exact />
              <Route path="/resources" component={Resources} />
              <Route
                path="/login"
                render={props => (
                  <Login {...props} currentUser={this.setCurrentUser} />
                )}
              />
              <Route
                path="/logout"
                render={props => (
                  <Logout {...props} resetUser={this.resetCurrentUser} />
                )}
              />
              <Route
                path="/specialists"
                render={props => (
                  <Specialists
                    {...props}
                    specialists={this.state.specialists}
                    currentUser={this.state.currentUser}
                  />
                )}
              />
              <Route
                path="/clinics"
                render={props => (
                  <Clinics {...props} clinics={this.state.clinics} />
                )}
              />
              <Route
                path="/register"
                render={props => (
                  <Register {...props} setCurrentUser={this.setCurrentUser} />
                )}
              />
              <Route
                path="/confirmation"
                render={props => <Confirmation {...props} />}
              />
            </Fragment>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
