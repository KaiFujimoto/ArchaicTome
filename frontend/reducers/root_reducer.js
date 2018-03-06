import { combineReducers } from 'redux';
import sessionReducer from './session_reducer.js';
import sessionErrorsReducer from './session_errors_reducer.js';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer
});

export default RootReducer;
