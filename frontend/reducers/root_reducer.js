import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import sessionErrorsReducer from './session_errors_reducer';
import postReducer from './post_reducer';

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: sessionErrorsReducer,
  posts: postReducer
});

export default RootReducer;
