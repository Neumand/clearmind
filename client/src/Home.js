import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Media, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faTasks,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css';
import Background from '../public/home-background.png';

class Home extends Component {
  
  // Scroll to top on arrival to component
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <Container
          className='clearmind-hero-pattern'
          fluid
          style={{ backgroundImage: `url(${Background})` }}
        >
          <Row style={{ alignItems: `center`, flexDirection: `column` }}>
            <img
              src='/logo.png'
              alt='Clearmind logo'
              style={{ width: `15rem`, marginBottom: `-2rem` }}
            />
            <h4 style={{ fontWeight: `bold` }}>
              Facilitating access to mental health specialists for those seeking
              professional help
            </h4>
          </Row>
        </Container>

        <Container style={{ marginTop: `7rem`, marginBottom: `7rem` }}>
          <Row>
            <Col>
              <Media>
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  size='2x'
                  className='align-self-start mr-3'
                />
                <Media.Body>
                  <h5 className='heading'>Simple Booking</h5>
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
                  size='2x'
                  className='align-self-start mr-3'
                />
                <Media.Body>
                  <h5 className='heading'>Session Management</h5>
                  <p>
                    Keep track of your sessions with SMS confirmations, and
                    cancel an upcoming appointment with the click of a button.
                  </p>
                </Media.Body>
              </Media>
            </Col>
            <Col>
              <Media>
                <FontAwesomeIcon
                  icon={faComments}
                  size='2x'
                  className='align-self-start mr-3'
                />
                <Media.Body>
                  <h5 className='heading'>Chat Assistance</h5>
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
              <img
                src='/best-self.png'
                alt='Person as superhero with cape'
                style={{ maxWidth: `100%` }}
              />
            </Col>
            <Col className='vector-column' style={{ textAlign: `left` }}>
              <h3 className='heading'>Your Best Self</h3>
              <p>
                Everyone deserves to be their best self. If you feel that your
                mental health is being negatively affected in any way, shape or
                form, you may consider seeking professional help. With a wide
                range of expertise, our specialists can tailor to your specific
                needs and help alleviate your pain.
              </p>
              <Link to='/register'>
                <Button>Register now to talk to someone</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col className='vector-column' style={{ textAlign: `right` }}>
              <h3 className='heading'>Healthy Support System</h3>
              <p>
                Friends and family play an important role in the lives of an
                individual with a mental illness. Additionally, stories shared
                from real people dealing with mental illness can help reduce the
                stigma surrounding it and remind those suffering that they are
                not alone. Learn more about how you can help or hear from
                inspiring individuals by browsing our articles.
              </p>
              <Link to='/resources'>
                <Button>Explore our available resources</Button>
              </Link>
            </Col>
            <Col>
              <img
                src='/friends-family.png'
                alt='Friends and family waiting at airport'
                style={{ maxWidth: `100%` }}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
