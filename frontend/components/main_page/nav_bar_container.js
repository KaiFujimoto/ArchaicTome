import { connect } from 'react-redux';
import React from 'react';
import NavBar from './nav_bar';

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

export default connect(mapStateToProps)(NavBar);
