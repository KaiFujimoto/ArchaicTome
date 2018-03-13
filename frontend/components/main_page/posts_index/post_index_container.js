import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../../actions/post_actions';

import PostIndex from './post_index';

const mapStateToProps = (state, ownProps) => {

  return ({
    posts: Object.values(state.posts).reverse(),
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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex));
