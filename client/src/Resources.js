import React from 'react';
import { Container, Media, Row } from 'react-bootstrap';

const Resources = ({ articles }) => {
  const articleList = articles.map(article => {
    return (
      <div key={article.id}>
        <a href={article.url} target='_blank' style={{textDecoration: 'none', color: '#212529'}}>
          <Media style={{border: `1px solid rgba(0,0,0,.125)`,borderRadius: `.25rem`}}>
            <img
              width={64}
              height={64}
              className='mr-3'
              src={article.thumbnail}
              alt={article.description}
            />
            <Media.Body>
              <h5>{article.title}</h5>
              <p>{article.description}</p>
            </Media.Body>
          </Media>
        </a>
      </div>
    );
  });

  return (
    <Container style={{ marginTop: '3rem' }}>
      <Row>{articleList}</Row>
    </Container>
  );
};

export default Resources;
