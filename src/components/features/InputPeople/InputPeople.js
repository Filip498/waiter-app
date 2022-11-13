import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';

const InputPeople = ({peopleAmount, setTablePeopleAmount, maxPeopleAmount, setMaxPeopleAmount}) => {
  const handlePeopleChange = e => {
    if (e.target.value <= maxPeopleAmount && e.target.value >= 0 && e.target.value <= 10) {
      setTablePeopleAmount(parseInt(e.target.value));
    }
  };
  const handleMaxPeopleChange = e => {
    if (e.target.value < peopleAmount) {
      setTablePeopleAmount(parseInt(e.target.value));
    }
    if (e.target.value >= 0 && e.target.value <= 10) {
      setMaxPeopleAmount(parseInt(e.target.value));
    }
  };

  return (
    <Form.Group as={Row} className="mb-3" controlId="formTablePeople">
      <Form.Label column sm={2} className="fw-bold">
        People:
      </Form.Label>
      <Col xs sm={2} md={1}>
        <Form.Control type="number" value={peopleAmount} onChange={handlePeopleChange} />
      </Col>
      <div className="p-0 w-auto align-self-center">/</div>
      <Col xs sm={2} md={1}>
        <Form.Control type="number" value={maxPeopleAmount} onChange={handleMaxPeopleChange} />
      </Col>
    </Form.Group>
  );
};

export default InputPeople;