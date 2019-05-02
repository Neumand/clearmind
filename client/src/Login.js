import React, { Component } from "react";
import { post } from "axios";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: ""
    };
  }
  handleAuth = e => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const request = {
      auth: {
        email: email,
        password: password
      }
    };

    post("/user_token", request)
      .then(res => {
        const { id, first_name } = res.data.user;
        localStorage.setItem("jwt", res.data.jwt);
        localStorage.setItem("user id", res.data.user.id);
        localStorage.setItem("user name", res.data.user.first_name);
        this.props.currentUser(id, first_name);
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ errorMessage: "Wrong Credentials" });
      });
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleAuth}>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              name="email"
              id="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              id="password"
              type="password"
              className="form-control"
            />
          </div>
          <div>{this.state.errorMessage}</div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="row justify-content-between">
            <div className="container">
              <h4>Don't have an account?</h4>
            </div>
            <div className="container">
              <a className="btn btn-primary" href="/register" role="button">
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
