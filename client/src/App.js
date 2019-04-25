import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get('api/v1/users')
      .then(response => {
        console.log(response);
        this.setState({
          users: response.data,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
