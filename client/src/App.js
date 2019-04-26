import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Home from "./Home";
import Team from "./Team";
import Clinics from "./Clinics";

class App extends Component {
  state = {
    users: [],
    professionals: [],
    clinics: []
  };

  componentDidMount() {
    axios
      .all([
        axios.get("api/v1/users"),
        axios.get("api/v1/professionals"),
        axios.get("api/v1/clinics")
      ])
      .then(
        axios.spread((usersRes, profRes, clicRes) => {
          this.setState({
            users: usersRes.data,
            professionals: profRes.data,
            clinics: clicRes.data
          });
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <NavBar />
        {/* <Home /> */}
        <Team profs={this.state.professionals} />
        <Clinics clinics={this.state.clinics} />
      </div>
    );
  }
}

export default App;
