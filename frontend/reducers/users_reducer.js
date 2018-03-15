import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_FRIEND_REQUEST,
  RECEIVE_NEW_FRIEND,
  REMOVE_FRIEND_REQUEST
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

    case REMOVE_FRIEND_REQUEST:
      const array = oldState[action.payload.friend_id].friend_ids;
      const user3 = oldState[action.payload.friend_id];
      user3.pending_friends = array.filter( el => el != action.payload.user_id);
      return merge({}, oldState, {[user3.id]: user3});

    case RECEIVE_NEW_FRIEND:
      const user1 = oldState[action.payload.payload.friend_id];
      user1.friend_ids.push(action.payload.payload.user_id);
      const user2 = oldState[action.payload.payload.user_id];
      user2.friend_ids.push(action.payload.payload.friend_id);
      const newState = merge({}, oldState, {[user1.id]: user1}, {[user2.id]: user2});
      return newState;

    case RECEIVE_FRIEND_REQUEST:
      const user = merge({}, oldState[action.payload.friend_id]);
      user.pending_friends.push(action.payload.user_id);
      return merge({}, oldState, {[user.id]: user});
    default:
      return oldState;
  }
}
