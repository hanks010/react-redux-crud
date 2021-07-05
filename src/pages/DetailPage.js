import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { postDelete } from '../store';
import { Card, Button } from 'react-bootstrap';

const DetailPage = (props) => {
  const { id } = props.match.params;
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);

  const dispatcher = useDispatch();

  const del = () => {
    dispatcher(postDelete(post[0].id));
    props.history.push('/');
  };

  return (
    <div class="container">
      <Card>
        <Card.Header as="h5">id: {post[0].id} </Card.Header>
        <Card.Body>
          <Card.Title> {post[0].title}</Card.Title>
          <Card.Text>{post[0].content}</Card.Text>
          <Button variant="dark">
            <Link to={`/post/${post[0].id}/update`}>수정</Link>
          </Button>
          <Button variant="dark" onClick={del}>
            삭제
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DetailPage;
