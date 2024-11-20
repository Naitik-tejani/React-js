import { createStore } from 'redux';
import noteReducer from './reducer';

const store = createStore(
  noteReducer, // Reducer function
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For Redux DevTools
);

export default store;
