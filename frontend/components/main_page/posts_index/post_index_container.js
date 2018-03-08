import { connect } from 'react-redux';
import React from 'react';
import { fetchPosts, updatePost, deletePost } from '../../../actions/post_actions';

import PostIndex from './post_index';

const mapStateToProps = state => {
  debugger
  return ({
    posts: Object.values(state.posts).reverse(),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (postId) => dispatch(updatePost(postId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
