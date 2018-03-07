import { connect } from 'react-redux';
import React from 'react';
import { fetchPosts, deletePost } from '../../actions/post_actions';

import FeedIndex from './feed_index';

const mapStateToProps = state => {
  return ({
    posts: Object.values(state.posts),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (postId) => dispatch(deletePost(postId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
