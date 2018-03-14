import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';

const _defaultState = {};

export default function(oldState = _defaultState, action) {
  switch (action.type) {
    case RECEIVE_USER:
     
      return {[action.user.id]: action.user};
    default:
      return oldState;
  }
}
