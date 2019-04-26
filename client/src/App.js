import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Specialists from './Specialists';
import Resources from './Resources';
import Clinics from './Clinics';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    specialists: [],
    clinics: [],
  };

  componentDidMount() {
    axios
      .all([
        axios.get('api/v1/users'),
        axios.get('api/v1/professionals'),
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <div>
              <Route path='/' component={Home} exact />
              <Route path='/resources' component={Resources} />
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
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
