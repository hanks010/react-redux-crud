import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';

const HomePage = () => {
  const { posts } = useSelector((store) => store);
  return (
    <div class="container">
      <Card style={{ width: '18rem' }}>
        <Card.Header>글 목록</Card.Header>
        <ListGroup variant="flush">
          {posts.map((post) => (
            <ListGroup.Item>
              {' '}
              {post.id} : <Link to={`/post/${post.id}`}>{post.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default HomePage;
