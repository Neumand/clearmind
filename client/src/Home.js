import React, { Fragment } from 'react';
import { Container, Row, Card, Col, Media, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faTasks,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css';
import Background from '../public/home-background.png';

class Home extends React.Component {
  // Scroll to top on arrival to component
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <Container
          className="clearmind-hero-pattern"
          fluid
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Row style={{ alignItems: `center`, flexDirection: `column` }}>
            <img
              src="/logo.png"
              style={{ width: `15rem`, marginBottom: `-2rem` }}
            />
            <h3 style={{ fontWeight: `bold` }}>
              A platform to privately and securely grant access to professional
              help to those in need.
            </h3>
          </Row>
        </Container>

        <Container style={{ marginTop: `7rem`, marginBottom: `7rem` }}>
          <Row>
            <Col>
              <Media>
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  size="2x"
                  className="align-self-start mr-3"
                />
                <Media.Body>
                  <h5>Simple booking</h5>
                  <p>
                    Easily book a session with one of specialists in the comfort
                    of your home.
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col>
              <Media>
                <FontAwesomeIcon
                  icon={faTasks}
                  size="2x"
                  className="align-self-start mr-3"
                />
                <Media.Body>
                  <h5>Session management</h5>
                  <p>
                    Keep track of your sessions with email and SMS
                    confirmations, and cancel an upcoming appointment with the
                    click of a button.
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col>
              <Media>
                <FontAwesomeIcon
                  icon={faComments}
                  size="2x"
                  className="align-self-start mr-3"
                />
                <Media.Body>
                  <h5>Chat assistance</h5>
                  <p>
                    Our integrated chatbot will answer your general questions
                    and allow you to book an appointment via messaging.
                  </p>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </Container>

        {/* Vector section */}
        <Container>
          <Row style={{ marginBottom: `5rem` }}>
            <Col>
              <img src="/best-self.png" style={{ maxWidth: `100%` }} />
            </Col>
            <Col className="vector-column">
              <h3 style={{ color: `#0C355C`, fontWeight: `bold` }}>
                Your Best Self
              </h3>
              <p>Lorem ipsum descriptum maximum </p>
              <Link to="/register">
                <Button>Register now to talk to someone</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className="vector-column">
              <h3 style={{ color: `#0C355C`, fontWeight: `bold` }}>
                Your Loved Ones Care
              </h3>
              <p>Lorem ipsum descriptum maximum </p>
              <Link to="/resources">
                <Button>Learn more about mental health</Button>
              </Link>
            </Col>
            <Col>
              <img src="/friends-family.png" style={{ maxWidth: `100%` }} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
