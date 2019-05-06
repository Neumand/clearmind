import React, { Component, Fragment } from 'react';
import { post } from 'axios';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
    };
  }

  // User creation POST request handler
  register = e => {
    e.preventDefault();
    // Retrieve data from for fields
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

    // Construct a data object to use in axios POST request
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

    // Axios POST request. Upon success custom JWT token will be returned.
    // Store current user token and id in localStorage and set state in App.js
    // Redirect to home page. If error, notice displayed next to Submit button.

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
    // Form group to register a user
    return (
      <Fragment>
        <Container style={{ 'margin-top': `5REM` }}>
          <h1>Register</h1>
          <p>Please fill out all of the below fields</p>
          <Form onSubmit={this.register}>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="first_name">First Name</Form.Label>
                <Form.Control name="first_name" id="first_name" type="text" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="last_name">Last Name</Form.Label>
                <Form.Control name="last_name" id="last_name" type="text" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="gender">Gender</Form.Label>
                <Form.Control as="select" name="gender" id="gender">
                  <option />
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="date_of_birth">Date of Birth</Form.Label>
                <Form.Control
                  placeholder="YYYY-MM-DD"
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control name="email" id="email" type="email" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="phone_number">Phone Number</Form.Label>
                <Form.Control
                  placeholder="123-456-7890"
                  name="phone_number"
                  id="phone_number"
                  type="tel"
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control name="password" id="password" type="password" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label htmlFor="password_confirmation">
                  Password Confirmation
                </Form.Label>
                <Form.Control
                  name="password_confirmation"
                  id="password_confirmation"
                  type="password"
                />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit</Button>
            <div>{this.state.errorMessage}</div>
          </Form>
        </Container>
        <Container>
          <Row className="justify-content-center" style={{ marginTop: `2REM` }}>
            <h4 style={{ marginRight: `0.75REM` }}>Already have an account?</h4>
            <Link to="/login">
              <Button style={{ marginLeft: `0.75REM` }}>Log In</Button>
            </Link>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Register;
