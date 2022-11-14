import {API_URL} from '../config.js';

//selectors
export const getAllTables = ({tables}) => tables;
export const getTableById = ({tables}, id) => tables.filter(table => table.id === id)[0];

// actions names
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const fetchTables = () => {
  return dispatch => {
    fetch(API_URL + '/tables')
      .then(response => response.json())
      .then(tables => dispatch(updateTables(tables)));
  };
};

export const editTable = table => {
  const url = API_URL + '/tables/' + table.id;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(table),
  };
  return dispatch => {
    fetch(url, options)
      .then(response => response.json())
      .then(tables => dispatch(updateTables(tables)));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default tablesReducer;