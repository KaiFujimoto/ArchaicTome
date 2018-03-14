import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_FRIEND_REQUEST
} from '../actions/friend_actions';
import { merge } from 'lodash';
import {
  RECEIVE_ALL_POSTS
} from '../actions/post_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';

const _defaultState = {};

export default function(oldState = _defaultState, action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, oldState, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return merge({}, oldState, action.users);
    case RECEIVE_FRIEND_REQUEST:
      const user = merge({}, oldState[action.payload.friend_id]);
      user.pending_friends.push(action.payload.user_id);
      return merge({}, oldState, {[user.id]: user});
    default:
      return oldState;
  }
}
