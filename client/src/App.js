import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Team from './Team';

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
        {/* <Home /> */}
        <Team profs={this.state.professionals} />
      </div>
    );
  }
}

export default App;
