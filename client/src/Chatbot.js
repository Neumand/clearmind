import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Iframe from 'react-iframe';

class Chatbot extends Component {
  constructor() {
    super();

    this.state = {
      display: 'none',
    };
  }

  // Event handler for chatbox access button
  handleDisplay = e => {
    this.state.display === 'none'
      ? this.setState({ display: '' })
      : this.setState({ display: 'none' });
  };

  render() {
    // If user is authenticated display chatbox
    // If not, chatbox iframe and the access button is not rendered
    if (localStorage.getItem('jwt')) {
      return (
        <Navbar fixed="bottom" style={{ flexDirection: `column`, alignItems: `flex-end` }}>
          <Button
            variant="dark"
            onClick={this.handleDisplay}
            style={{ borderRadius: `6 px` }}
          >
            <FontAwesomeIcon icon={faComment} size="3x" />
          </Button>
          <Iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/406ad268-b7a1-4edb-96e5-112b68f7e514"
            display={this.state.display}
            onClick={this.handleDisplay}
          />
        </Navbar>
      );
    } else {
      return <Navbar />;
    }
  }
}

export default Chatbot;
