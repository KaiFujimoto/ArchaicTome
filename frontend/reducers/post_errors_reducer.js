import {
  RECEIVE_POST_ERRORS,
  RECEIVE_POST
} from '../actions/post_actions';

const postErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default postErrorsReducer;
