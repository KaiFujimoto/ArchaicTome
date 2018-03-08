import { connect } from 'react-redux';
import React from 'react';
import { createPost } from '../../../actions/post_actions';

import CreatePost from './create_post_form';

const mapStateToProps = state => {
  return ({
    post: {body: ''},
    receiver: state.session.currentUser,
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createPost: (post) => dispatch(createPost(post))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
