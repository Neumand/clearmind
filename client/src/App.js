import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';

class App extends Component {
  state = {
    users: [],
    professionals: [],
  };

  componentDidMount() {
    axios
      .all([axios.get('api/v1/users'), axios.get('api/v1/professionals')])
      .then(
        axios.spread((usersRes, profRes) => {
          this.setState({
            users: usersRes.data,
            professionals: profRes.data,
          });
        }),
      )
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Team />
      </div>
    );
  }
}

export default App;
