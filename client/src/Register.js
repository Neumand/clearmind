import React, { Component } from "react";
import { post } from "axios";

class Register extends Component {
  register = e => {
    e.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const password_confirmation = document.getElementById(
      "password_confirmation"
    ).value;
    const gender = document.getElementById("gender").value;
    const date_of_birth = document.getElementById("date_of_birth").value;
    const phone_number = document.getElementById("phone_number").value;

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
        password
      }
    };

    console.log(request);

    post("/api/v1/users", request)
      .then(res => {
        const { id, first_name } = res.data.user;
        localStorage.setItem("jwt", res.data.jwt);
        this.props.currentUser(id, first_name);
        this.props.history.push("/");
      })
      .catch(err => console.log("Error: ", err));
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.register}>
          <div className="form-group">
            <label htmlFor="first_name">First Name: </label>
            <input
              name="first_name"
              id="first_name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Last Name: </label>
            <input
              name="last_name"
              id="last_name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender: </label>
            <select name="gender" id="gender" className="form-control">
              <option />
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date_of_birth">Date of Birth: </label>
            <input
              name="date_of_birth"
              id="date_of_birth"
              type="date"
              placeholder="YYYY-MM-DD"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number: </label>
            <input
              name="phone_number"
              id="phone_number"
              type="tel"
              placeholder="123-456-7890"
              className="form-control"
            />
          </div>
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
          <div className="form-group">
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
