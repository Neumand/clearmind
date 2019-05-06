import React from 'react';
import { Container, Row, Jumbotron, Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = props => {
  const {
    bookedSpec,
    clinic,
    endTime,
    location,
    startTime,
  } = props.location.state;

  return (
    <Container style={{ marginTop: `6rem` }}>
      <Row>
        <Jumbotron>
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="6x"
            style={{ color: `#5cb85c`, textAlign: `center` }}
          />
          <h1>Confirmed!</h1>
          <p>
            Your booking has been confirmed and you will be receiving a
            confirmation via text message shortly.
          </p>
          <p>Please see below for details regarding your appointment:</p>
          <h3>Session Details</h3>
          <Table>
            <thead>
              <tr>
                <th>Specialist</th>
                <th>Date</th>
                <th>From</th>
                <th>To</th>
                <th colSpan="2">Clinic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{bookedSpec}</td>
                <td>{startTime.toDateString()}</td>
                <td>{startTime.toLocaleTimeString('en-CA')}</td>
                <td>{endTime.toLocaleTimeString('en-CA')}</td>
                <td>{clinic}</td>
                <td>{location}</td>
              </tr>
            </tbody>
          </Table>
          <p>
            If you would like some more information, please check our{' '}
            <Link to="/resources">resources</Link>.
          </p>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </Jumbotron>
      </Row>
    </Container>
  );
};

export default Confirmation;
