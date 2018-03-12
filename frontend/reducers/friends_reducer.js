import {
  RECEIVE_ALL_CURRENT_FRIENDS,
  RECEIVE_FRIEND_REQUEST,
  REMOVE_FRIEND_REQUEST
} from '../actions/friend_actions';
import merge from 'lodash/merge';

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CURRENT_FRIENDS:
      return action.friends;
    case RECEIVE_FRIEND_REQUEST:
      return merge({}, state, {[action.friend.id]: action.friend});
    case REMOVE_FRIEND_REQUEST:
      let newState = merge({}, state);
      delete newState[action.friendId];
      return newState;
    default:
      return state;
  }
};

export default friendsReducer;
