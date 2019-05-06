import React, { Component, Fragment } from 'react';
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  CardColumns,
  Image,
} from 'react-bootstrap';
import './Resources.css';

class Resources extends Component {
  constructor() {
    super();
    this.state = {
      category: 'Information, Stories, Support',
    };
  }

  // Scroll to top on arrival to component
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // Handler method for category filter
  handleCategory = e => {
    const option = e.target.value;
    if (option === 'All') {
      this.setState({ category: 'Information, Stories, Support' });
    } else {
      this.setState({ category: option });
    }
  };

  render() {
    // Maps the articles loaded from database to give them consistent styling
    const articleList = this.props.articles.map(article => {
      if (this.state.category.includes(article.category)) {
        return (
          <Col key={article.id}>
            <div>
              <a
                href={article.url}
                target="_blank"
                style={{ textDecoration: 'none', color: '#212529' }}
              >
                <Card className="text-center card">
                  <Card.Header>
                    <h5>{article.title}</h5>
                  </Card.Header>
                  <Card.Img variant="top" src={article.thumbnail} />
                  <Card.Body>
                    <Card.Text>
                      <p>{article.description}</p>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Category: {article.category}
                  </Card.Footer>
                </Card>
              </a>
            </div>
          </Col>
        );
      }
    });

    // Render returns a div with header elements followed by mapped array of articles
    return (
      <Fragment>
        <Container style={{ marginTop: `5rem` }}>
          <h1 style={{ textAlign: `center` }}>
            Resources: Learn More About Mental Illness
          </h1>
          <Row style={{ justifyContent: `center` }}>
            <Col md={3} className="image-container">
              <Image
                fluid
                src="https://image.flaticon.com/icons/svg/1207/1207809.svg"
                className="header-image"
              />
            </Col>
            <Col md={6}>
              <Row style={{ marginTop: `2rem` }}>
                <p style={{ textAlign: `center` }}>
                  Knowledge is power, especially when it comes to mental health.
                  Learn more by browsing our full list of curated resources, or
                  filter by category.
                </p>
              </Row>
              <Row className="header-body">
                <h5>Filter by category: &nbsp;</h5>
                <Form>
                  <Form.Control
                    as="select"
                    name="category"
                    id="category"
                    onChange={this.handleCategory}
                    value={this.state.category}
                  >
                    <option>All</option>
                    <option>Information</option>
                    <option>Stories</option>
                    <option>Support</option>
                  </Form.Control>
                </Form>
              </Row>
            </Col>
            <Col md={3} className="image-container">
              <Image
                fluid
                src="https://image.flaticon.com/icons/svg/1207/1207809.svg"
                className="header-image"
                style={{ transform: `ScaleX(-1)` }}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <CardColumns>{articleList}</CardColumns>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Resources;
