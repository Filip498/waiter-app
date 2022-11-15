import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';
import statusesReducer from './statusesRedux';

const subreducers = {
  tables: tablesReducer,
  statuses: statusesReducer,
};

const reducers = combineReducers(subreducers);

const store = createStore(
    //referencja do funkcji odpowiedzialnej za modyfikacje magazynu
    reducers,
    //wskazanie danych startowych magazynu
    initialState,
    compose(
      applyMiddleware(thunk),
      //wpis do wtyczki w chrome
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  export default store;