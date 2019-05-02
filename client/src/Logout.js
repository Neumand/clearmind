import React from "react";
import { Redirect } from "react-router-dom";

const Logout = props => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user id");
  localStorage.removeItem("user name");
  props.resetUser();
  return <Redirect to="/" />;
};

export default Logout;
