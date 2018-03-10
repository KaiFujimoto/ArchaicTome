import * as UserApiUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVER_USER_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

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

export const receiveCurrentUser = currentUser => {

  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveUserErrors = errors => {
  return ({
    type: RECEIVE_USER_ERRORS,
    errors
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

export const updateUser = (user) => {
  return dispatch => {
    return UserApiUtil.updateUser(user).then(user => {
      dispatch(receiveCurrentUser(user));
    }, err => {
      return (
        dispatch(receiveUserErrors(err.responseJSON))
      );
    });
  };
};
