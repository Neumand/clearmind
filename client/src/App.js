import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    const usersList = this.state.users.map(user => {
      <li>{user.first_name} {user.last_name} - {user.email}</li>
    })
    return (
      <div className='App'>
        <h1>Users:</h1>
        <ul>
          {usersList}
        </ul>
      </div>
    );
  }
}

export default App;
