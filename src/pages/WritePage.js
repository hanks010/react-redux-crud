import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postInsert } from '../store';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const WritePage = (props) => {
  const [postDTO, setPostDTO] = useState({
    id: '',
    title: '',
    content: ' ',
  });
  const ChangeValue = (e) => {
    //함수의 파라미터에 현재 실행되는 이벤트의 컨텍스트를 주입시켜준다
    setPostDTO({
      ...postDTO,
      [e.target.name]: e.target.value,
    });
  };
  const dispatcher = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatcher(postInsert(postDTO));
    props.history.push('/');
  };
  return (
    <div class="container">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label> &nbsp; id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter id"
            name="id"
            onChange={ChangeValue}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label> &nbsp; title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            onChange={ChangeValue}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label> &nbsp; content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter content"
            name="content"
            onChange={ChangeValue}
          />
        </Form.Group>
        <Button variant="dark" onClick={submit}>
          글쓰기 완료
        </Button>
      </Form>
    </div>
  );
};

export default WritePage;
