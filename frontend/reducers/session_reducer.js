import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  LOGOUT_USER
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return {currentUser: currentUser};
    case LOGOUT_USER:
      return {currentUser: null};
    default:
      return state;
  }
};

export default sessionReducer;
