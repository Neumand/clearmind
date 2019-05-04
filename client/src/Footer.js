import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed='bottom'>
      <iframe
        allow='microphone;'
        width='350'
        height='430'
        src='https://console.dialogflow.com/api-client/demo/embedded/406ad268-b7a1-4edb-96e5-112b68f7e514'
      />
    </Navbar>
  );
};

export default Footer;
