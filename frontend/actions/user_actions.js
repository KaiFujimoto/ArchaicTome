import * as UserApiUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveAllUsers = users => {
  return ({
    type: RECEIVE_ALL_USERS,
    users
  });
};

export const receiveUser = user => {
  return ({
    type: RECEIVE_USER,
    user
  });
};

export const fetchAllUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchAllUsers().then(user => {
      dispatch(receiveAllUsers(user));
    }, err => {
      return (
        dispatch(receiveUserErrors(err.responseJSON))
      );
    });
  };
};

export const fetchUser = (userId) => {
  return dispatch => {
    return UserApiUtil.fetchUser(userId).then(user => {
      dispatch(receiveUser(user));
    }, err => {
      return (
        dispatch(receiveUserErrors(err.responseJSON))
      );
    });
  };
};
