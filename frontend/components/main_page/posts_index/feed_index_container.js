import { connect } from 'react-redux';
import React from 'react';
import { fetchPosts } from '../../../actions/post_actions';
import { withRouter } from 'react-router-dom';

import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return ({
    posts: Object.values(state.posts).reverse(),
    profileUser: state.session.currentUser,
    users: state.users,
    comments: Object.values(state.comments)
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex));
