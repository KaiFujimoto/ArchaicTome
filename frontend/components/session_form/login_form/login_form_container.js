import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../../actions/session_actions';

import LoginForm from './login_form';

const mapStateToProps = ({errors}) => {
  return ({
    errors: errors,
    formType: 'Login',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
