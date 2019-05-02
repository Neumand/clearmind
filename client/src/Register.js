import React, { Component } from 'react';
import { post } from 'axios';
import { Container } from 'react-bootstrap';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
    };
  }

  register = e => {
    e.preventDefault();
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password_confirmation = document.getElementById(
      'password_confirmation',
    ).value;
    const gender = document.getElementById('gender').value;
    const date_of_birth = document.getElementById('date_of_birth').value;
    const phone_number = document.getElementById('phone_number').value;

    const request = {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      gender,
      date_of_birth,
      phone_number,
      auth: {
        email,
        password,
      },
    };

    post('/api/v1/users', request)
      .then(res => {
        localStorage.setItem('jwt', res.data.jwt);
        localStorage.setItem('user id', res.data.user.id);
        localStorage.setItem('user name', res.data.user.first_name);
        this.props.setCurrentUser();
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          errorMessage: 'Error: Please verify your information.',
        });
      });
  };

  render() {
    return (
      <Container>
        <h1>Register</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="d-flex justify-content-center">
          <form onSubmit={this.register}>
            <div className="form-row">
              <div className="form-group col-md-10">
                <label htmlFor="first_name">First Name: </label>
                <input
                  name="first_name"
                  id="first_name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-10">
                <label htmlFor="last_name">Last Name: </label>
                <input
                  name="last_name"
                  id="last_name"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-10">
                <label htmlFor="gender">Gender: </label>
                <select name="gender" id="gender" className="form-control">
                  <option />
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group col-md-10">
                <label htmlFor="date_of_birth">Date of Birth: </label>
                <input
                  name="date_of_birth"
                  id="date_of_birth"
                  type="date"
                  placeholder="YYYY-MM-DD"
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-10">
                <label htmlFor="phone_number">Phone Number: </label>
                <input
                  name="phone_number"
                  id="phone_number"
                  type="tel"
                  placeholder="123-456-7890"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-10">
                <label htmlFor="email">Email: </label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-10">
                <label htmlFor="password">Password:</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-10">
                <label htmlFor="password_confirmation">
                  Password Confirmation:
                </label>
                <input
                  name="password_confirmation"
                  id="password_confirmation"
                  type="password"
                  className="form-control"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div>{this.state.errorMessage}</div>
          </form>
        </div>
      </Container>
    );
  }
}

export default Register;
