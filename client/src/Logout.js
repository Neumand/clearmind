import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = props => {
  // On logout destroy stored current user data and redirect to Home page.
  localStorage.removeItem('jwt');
  localStorage.removeItem('user id');
  localStorage.removeItem('user name');
  props.resetUser();
  return <Redirect to="/" />;
};

export default Logout;
