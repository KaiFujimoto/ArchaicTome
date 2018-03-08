import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import {
  RECEIVE_POST_ERRORS,
  RECEIVE_POST
} from '../actions/post_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_POST_ERRORS:   
      return action.errors;
    case RECEIVE_POST:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
