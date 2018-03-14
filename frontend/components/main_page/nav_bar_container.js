import { connect } from 'react-redux';
import React from 'react';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser,
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
