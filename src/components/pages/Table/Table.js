import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getTableById, editTable} from '../../../redux/tablesRedux.js';
import {getAllStatuses} from '../../../redux/statusesRedux.js';
import {useNavigate} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import InputBill from '../../features/InputBill/InputBill.js';
import InputPeople from '../../features/InputPeople/InputPeople.js';
import SelectStatus from '../../features/SelectStatus/SelectStatus.js';
import FormButton from '../../common/FormButton/FormButton.js';

const Table = ({id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const table = useSelector(state => getTableById(state, id));
  const statuses = useSelector(state => getAllStatuses(state));

  const [status, setStatus] = useState(table.status);
  const [peopleAmount, setTablePeopleAmount] = useState(table.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount);
  const [bill, setTableBill] = useState(table.bill);

  const clearValues = newStatus => {
    if (newStatus === 'Busy') {
      setTableBill(parseInt(0));
    } else if (newStatus === 'Cleaning' || newStatus === 'Free') {
      setTablePeopleAmount(parseInt(0));
    }
  };

  const handleUpdateTable = event => {
    event.preventDefault();
    navigate('/');
    dispatch(
      editTable({
        id,
        status,
        peopleAmount: parseInt(peopleAmount),
        maxPeopleAmount: parseInt(maxPeopleAmount),
        bill: parseInt(bill),
      })
    );
  };

  return (
    <div>
      <h1>Table {id}</h1>
      <Form onSubmit={handleUpdateTable}>
        <SelectStatus statuses={statuses} status={status} setStatus={setStatus} clearValues={clearValues} />
        <InputPeople peopleAmount={peopleAmount} setTablePeopleAmount={setTablePeopleAmount} maxPeopleAmount={maxPeopleAmount} setMaxPeopleAmount={setMaxPeopleAmount} />
        <InputBill setTableBill={setTableBill} bill={bill} status={status} />
        <FormButton text="Submit" />
      </Form>
    </div>
  );
};

export default Table;