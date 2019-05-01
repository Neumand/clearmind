import React from 'react';
import { Container, Row, Card, Col, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1>Welcome to Clearmind</h1>
      <p>
        A platform to privately and securely grant access to professional help
        to those in need.
      </p>
      <Row>
        <Image
          src='https://image.flaticon.com/icons/svg/1256/1256650.svg'
          width={200}
          height={200}
        />
      </Row>
      <Row>
        <Col xs={6}>
          <Card>
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
              <Card.Text>
                <p>Our specialists are here to listen with empathy, full
                confidentiality and without judgment. Speak to one today to help
                restore balance to your mind.</p>
                <a href='/specialists'>Book a session >></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
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
                <p>Browse our available resources to learn more about mental health
                or find out how you can help.</p>
                <a href='/resources'>Explore resources >></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
