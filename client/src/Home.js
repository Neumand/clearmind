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

const Home = () => {
  return (
    <Fragment>
      <Container className='clearmind-hero-pattern' fluid style={{backgroundImage: `url(${Background})`}}>
        <Row style={{ alignItems: `center`, flexDirection: `column` }}>
        <img src='/logo.png' style={{width: `15rem`, marginBottom: `-2rem`}} />
          <h3 style={{ fontWeight: `bold` }}>
            A platform to privately and securely grant access to professional
            help to those in need.
          </h3>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Media>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                size='2x'
                className='align-self-start mr-3'
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
                size='2x'
                className='align-self-start mr-3'
              />
              <Media.Body>
                <h5>Session management</h5>
                <p>
                  Keep track of your sessions with email and SMS confirmations,
                  and cancel an upcoming appointment with the click of a button.
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
                <h5>Chat assistance</h5>
                <p>
                  Our integrated chatbot will answer your general questions and allow you to book an appointment via messaging.
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={6}>
            <Card className='card-hover'>
              <Card.Img
                variant='top'
                src='https://images.unsplash.com/photo-1514845994104-1be22149278b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                width={200}
                height={200}
              />
              <Card.ImgOverlay>
                <Card.Title style={{ color: `whitesmoke` }}>
                  Talk to One of Our Specialists
                </Card.Title>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text style={{ textDecoration: `none` }}>
                  <p style={{ textDecoration: `none` }}>
                    Our specialists are here to listen with empathy, full
                    confidentiality and without judgment. Speak to one today to
                    help restore balance to your mind.
                  </p>
                  <Link to='/specialists'>
                    <Button variant='light'>Book a session</Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className='card-hover'>
              <Card.Img
                variant='top'
                src='https://images.unsplash.com/photo-1471440671318-55bdbb772f93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
                width={200}
                height={200}
              />
              <Card.ImgOverlay>
                <Card.Title style={{ color: `whitesmoke` }}>
                  Learn More
                </Card.Title>
              </Card.ImgOverlay>
              <Card.Body>
                <Card.Text>
                  <p style={{ textDecoration: `none` }}>
                    Browse our available resources to learn more about mental
                    health or find out how you can help.
                  </p>
                  <Link to='/resources'>
                    <Button variant='light' className='home-button'>
                      Explore resources
                    </Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
