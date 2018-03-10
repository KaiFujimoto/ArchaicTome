import { connect } from 'react-redux';
import React from 'react';
import { createPost, clearErrors } from '../../../actions/post_actions';

import CreatePost from './create_post_form';

const mapStateToProps = state => {
  return ({
    post: {body: ''},
    receiver: state.session.currentUser,
    errors: state.postErrors,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    createPost: (post) => dispatch(createPost(post)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
