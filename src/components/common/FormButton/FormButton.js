import React from 'react';
import {Col, Form, Row, Button} from 'react-bootstrap';

const FormButton = ({text}) => {
  return (
    <Form.Group as={Row} className="mb-3">
      <Col className="text-center text-sm-start" sm={{span: 12}}>
        <Button type="submit">{text}</Button>
      </Col>
    </Form.Group>
  );
};

export default FormButton;