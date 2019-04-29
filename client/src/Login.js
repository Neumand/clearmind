import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
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
    axios
      .post("/user_token", request.json)
      .then(res => {
        localStorage.setItem("jwt", res.data.jwt);
        this.props.history.push("/");
      })
      .catch(err => console.log("Error: ", err));
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="row justify-content-between">
            <div className="container">
              <h4>Don't have an account?</h4>
            </div>
            <div className="container">
              <a className="btn btn-primary" href="#" role="button">
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
