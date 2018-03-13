import { connect } from 'react-redux';
import React from 'react';
import { fetchPosts } from '../../../actions/post_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import { withRouter } from 'react-router-dom';

import PostIndex from './post_index';

const mapStateToProps = (state) => {
  return ({
    posts: Object.values(state.posts).reverse(),
    users: state.users,
    currentUser: state.session.currentUser,
    comments: Object.values(state.comments)
  });
};

const mapDispatchToProps = dispatch => {

  return ({
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex));
