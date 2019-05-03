import React, { Component, Fragment } from 'react';
import { Container, Card, Row, Col, Form } from 'react-bootstrap';

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
          <Col xs={6} md={4}>
            <div key={article.id}>
              <a
                href={article.url}
                target='_blank'
                style={{ textDecoration: 'none', color: '#212529' }}
              >
                <Card
                  className='text-center'
                  style={{
                    border: `1px solid rgba(0,0,0,.125)`,
                    borderRadius: `.25rem`,
                  }}
                >
                  <Card.Header>
                    <h3>{article.title}</h3>
                  </Card.Header>
                  <Card.Img variant='top' src={article.thumbnail} />
                  <Card.Body>
                    <Card.Text>
                      <p>{article.description}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          </Col>
        );
      }
    });

    return (
      <Fragment>
        <Container style={{ marginTop: '3rem' }}>
          <h1>Resources: Learn More About Mental Illness</h1>
          <Row style={{ margin: `2rem`, justifyContent: `center` }}>
            <h4 style={{ marginRight: `0.75rem` }}>Filter by category:</h4>
            <Form style={{ marginLeft: `0.75rem` }}>
              <Form.Control
                as='select'
                name='category'
                id='category'
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
        </Container>
        <Container>
          <Row>{articleList}</Row>
        </Container>
      </Fragment>
    );
  }
}

export default Resources;
