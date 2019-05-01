import React from "react";
import { Redirect } from "react-router-dom";

const Logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user id");
  localStorage.removeItem("user name");
  return <Redirect to="/" />;
};

export default Logout;
