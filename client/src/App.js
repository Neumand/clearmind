import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Specialists from './Specialists';
import Resources from './Resources';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    specialists: [],
  };

  componentDidMount() {
    axios
      .all([axios.get('api/v1/users'), axios.get('api/v1/professionals')])
      .then(
        axios.spread((usersRes, specRes) => {
          this.setState({
            users: usersRes.data,
            specialists: specRes.data,
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
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
