import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import {
  RECEIVE_ALL_POSTS
} from '../actions/post_actions';

const _defaultState = {};

export default function(oldState = _defaultState, action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, oldState, action.users);
    case RECEIVE_CURRENT_USER:
      return merge({}, oldState, { [action.currentUser.id]: action.currentUser });
    default:
      return oldState;
  }
}