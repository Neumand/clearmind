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

  handleCategory = e => {
    const option = e.target.value;
    if (option === 'All') {
      this.setState({ category: 'Information, Stories, Support' });
    } else {
      this.setState({ category: option });
    }
  };

  render() {
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

    return (
      <Fragment>
        <Container fluid style={{ marginTop: '5rem' }}>
          <h1 style={{ textAlign: `center` }}>
            Resources: Learn More About Mental Illness
          </h1>
          <Row style={{ margin: `2rem`, justifyContent: `center` }}>
            <Col md={3}>
              <Image
                fluid
                src="https://image.flaticon.com/icons/svg/1207/1207809.svg"
                style={{ width: `12em`, height: `12em`, textAlign: `center` }}
              />
            </Col>
            <Col md={3}>
              <p>
                Knowledge is power, especially when it comes to mental health.
                Learn more by browsing our full list of curated resources, or
                filter by category.
              </p>
              <h4 style={{ marginRight: `0.75rem` }}>Filter by category:</h4>
              <Form style={{ marginLeft: `0.75rem` }}>
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
            </Col>
            <Col md={3}>
              <Image
                fluid
                src="https://image.flaticon.com/icons/svg/1207/1207807.svg"
                style={{ width: `12em`, height: `12em`, textAlign: `center` }}
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
