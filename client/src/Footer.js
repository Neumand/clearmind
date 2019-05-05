import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Iframe from 'react-iframe';

class Footer extends Component {
  constructor() {
    super();

    this.state = {
      display: 'none',
    };
  }

  handleDisplay = e => {
    this.state.display === 'none'
      ? this.setState({ display: '' })
      : this.setState({ display: 'none' });
  };

  render() {
    return (
      <Navbar fixed='bottom' style={{justifyContent: `flex-end`}}>
        <Button
          variant='light'
          onClick={this.handleDisplay}
          style={{ display: !this.state.display }}
        >
          <FontAwesomeIcon icon={faComment} size='3x' />
        </Button>
        <Iframe
          allow='microphone;'
          width='350'
          height='430'
          src='https://console.dialogflow.com/api-client/demo/embedded/406ad268-b7a1-4edb-96e5-112b68f7e514'
          display={this.state.display}
          onClick={this.handleDisplay}
        />
      </Navbar>
    );
  }
}

export default Footer;
