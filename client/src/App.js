import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Specialists from './Specialists';
import Resources from './Resources';
import Clinics from './Clinics';
import Login from './Login';
import Register from './Register';
import Confirmation from './Confirmation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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

  // Set the currently loggied in user into the state.
  setCurrentUser = (id, firstName) => {
    this.setState({
      currentUser: {
        id,
        firstName,
      },
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Fragment>
              <Route path='/' component={Home} exact />
              <Route path='/resources' component={Resources} />
              <Route
                path='/login'
                render={props => (
                  <Login {...props} currentUser={this.setCurrentUser} />
                )}
              />
              <Route
                path='/specialists'
                render={props => (
                  <Specialists
                    {...props}
                    specialists={this.state.specialists}
                  />
                )}
              />
              <Route
                path='/clinics'
                render={props => (
                  <Clinics {...props} clinics={this.state.clinics} />
                )}
              />
              <Route
                path='/register'
                render={props => (
                  <Register {...props} currentUser={this.setCurrentUser} />
                )}
              />
              <Route path='/confirmation' component={Confirmation} />
            </Fragment>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
