import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const SelectStatus = ({statuses, status, setStatus, clearValues}) => {
  const changeHandler = e => {
    setStatus(e.target.value);
    clearValues(e.target.value);
  };
  return (
    <Form.Group as={Row} className="mb-3" controlId="formTableStatus">
      <Form.Label column sm={2} className="fw-bold">
        Status:
      </Form.Label>
      <Col sm={4}>
        <Form.Select aria-label="Default select example" defaultValue={status} onChange={changeHandler}>
          {statuses.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Form.Group>
  );
};

export default SelectStatus;