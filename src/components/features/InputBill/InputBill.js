import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const InputBill = ({bill, setTableBill, status}) => {
  if (status !== 'Busy') return <></>;
  else
    return (
      <Form.Group as={Row} className="mb-3" controlId="formTableBill">
        <Form.Label column sm={2} className="fw-bold">
          Bill:
        </Form.Label>
        <div className="pe-0 w-auto align-self-center">$</div>
        <Col xs sm={2} lg={1}>
          <Form.Control type="number" value={bill} onChange={e => setTableBill(parseInt(e.target.value))} />
        </Col>
      </Form.Group>
    );
};

export default InputBill;