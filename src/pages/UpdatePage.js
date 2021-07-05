import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUpdate } from '../store';
import { Form, Col, Row, Button } from 'react-bootstrap';

const UpdatePage = (props) => {
  const id = props.match.params.id;
  const { posts } = useSelector((store) => store);
  const post = posts.filter((post) => post.id == id);

  const [postDTO, setPostDTO] = useState({
    id: post[0].id,
    title: post[0].title,
    content: post[0].content,
  });
  const ChangeValue = (e) => {
    setPostDTO({ ...postDTO, [e.target.name]: e.target.value });
  };
  const dispatcher = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatcher(postUpdate(postDTO));
    props.history.push('/');
  };

  return (
    <div class="container">
      <Form>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            &nbsp; Id
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue={`${postDTO.id}`} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            &nbsp; title
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="title"
              value={postDTO.title}
              onChange={ChangeValue}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            &nbsp; content
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              name="content"
              value={postDTO.content}
              onChange={ChangeValue}
            />
          </Col>
        </Form.Group>
        <Button variant="dark" onClick={submit}>
          수정 완료
        </Button>
      </Form>
    </div>
  );
};

export default UpdatePage;
