import { connect } from 'react-redux';
import React from 'react';
import { fetchPosts } from '../../../actions/post_actions';

import PostIndex from './post_index';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    posts: Object.values(state.posts).reverse(),
    currentUser: state.session.currentUser,
    users: state.users,
    comments: Object.values(state.comments),
    profileUser: ownProps.profileUser
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
