import { connect } from 'react-redux';
import React from 'react';
import { createPost, clearErrors } from '../../../actions/post_actions';
import { withRouter } from 'react-router-dom';

import CreatePost from './create_post_form';

const mapStateToProps = state => {
  return ({
    post: {body: ''},
    receiver: state.session.currentUser,
    errors: state.postErrors,
    currentUser: state.session.currentUser,
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    createPost: (data) => dispatch(createPost(data)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost));
