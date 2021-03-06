import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  // If user is authenticated display chatbox
  // If not, chatbox iframe and the access button is not rendered

  return (
    <Navbar sticky id='footer'>
      <Navbar.Text>
        Clearmind © 2019 &nbsp; Illustrations by{' '}
        <a href='https://icons8.com'>Ouch.pics</a>
      </Navbar.Text>
    </Navbar>
  );
};

export default Footer;
