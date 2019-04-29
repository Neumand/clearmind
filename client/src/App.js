import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Home from "./Home";
import Specialists from "./Specialists";
import Resources from "./Resources";
import Clinics from "./Clinics";
import Login from "./Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    users: [],
    specialists: [],
    clinics: [],
    appointments: []
  };

  componentDidMount() {
    axios
      .all([
        axios.get("api/v1/users"),
        axios.get("api/v1/specialists"),
        axios.get("api/v1/clinics"),
        axios.get("api/v1/appointments")
      ])
      .then(
        axios.spread((usersRes, specRes, clicRes, appoRes) => {
          this.setState({
            users: usersRes.data,
            specialists: specRes.data,
            clinics: clicRes.data
          });
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <div>
              <Route path="/" component={Home} exact />
              <Route path="/resources" component={Resources} />
              <Route path="/login" component={Login} />
              <Route
                path="/specialists"
                render={props => (
                  <Specialists
                    {...props}
                    specialists={this.state.specialists}
                  />
                )}
              />
              <Route
                path="/clinics"
                render={props => (
                  <Clinics {...props} clinics={this.state.clinics} />
                )}
              />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
