import React, { Component, Fragment } from 'react';
import { post } from 'axios';
import { Container, Form, Button, Col, Row } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
    };
  }
  handleAuth = e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const request = {
      auth: {
        email: email,
        password: password,
      },
    };

    post('/user_token', request)
      .then(res => {
        const { id, first_name } = res.data.user;
        localStorage.setItem('jwt', res.data.jwt);
        localStorage.setItem('user id', res.data.user.id);
        localStorage.setItem('user name', res.data.user.first_name);
        this.props.currentUser(id, first_name);
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({ errorMessage: 'Wrong Credentials' });
      });
  };

  render() {
    return (
      <Fragment>
        <Container style={{'margin-top': `5REM`}}>
          <h1>Log In</h1>
          <Form onSubmit={this.handleAuth}>
            <Form.Group>
              <label htmlFor='email'>Email: </label>
              <input
                name='email'
                id='email'
                type='email'
                className='form-control'
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor='password'>Password: </label>
              <input
                name='password'
                id='password'
                type='password'
                className='form-control'
              />
            </Form.Group>
            <div>{this.state.errorMessage}</div>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Container>
        <Container>
          <Row className='justify-content-center' style={{'margin-top': `2REM`}}>
            <h4 style={{'margin-right': `0.75REM`}}>Don't have an account?</h4>
            <Button href='/register' style={{'margin-left': `0.75REM`}}>Sign Up</Button>
          </Row>
        </Container >
      </Fragment>
    );
  }
}

export default Login;
