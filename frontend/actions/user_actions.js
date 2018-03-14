import * as UserApiUtil from '../util/user_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveAllUsers = payload => {
  return ({
    type: RECEIVE_ALL_USERS,
    users: payload
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

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchAllUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchAllUsers().then(payload => {
      dispatch(receiveAllUsers(payload));
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
