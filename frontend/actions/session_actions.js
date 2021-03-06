import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveCurrentUser = currentUser => {

  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveSessionErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
};

export const logoutUser = () => {
  return ({
    type: LOGOUT_USER
  });
};

export const signup = user => {
  return dispatch => {
    return SessionApiUtil.signup(user).then(user => {
      dispatch(receiveCurrentUser(user));
    }, err => {
      dispatch(receiveSessionErrors(err.responseJSON));
    });
  };
};

export const login = user => {
  return dispatch => {
    return SessionApiUtil.login(user).then(user => {
      dispatch(receiveCurrentUser(user));
    }, err => {
      dispatch(receiveSessionErrors(err.responseJSON));
    });
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then( () => {
      dispatch(logoutUser());
    });
  };
};
