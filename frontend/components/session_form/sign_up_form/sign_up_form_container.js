import { connect } from 'react-redux';
import React from 'react';
import { signup, clearErrors } from '../../../actions/session_actions';

import SignUpForm from './sign_up_form';

const mapStateToProps = ({errors}) => {
  return ({
    errors: errors,
    formType: 'Login',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
