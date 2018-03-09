import { connect } from 'react-redux';
import React from 'react';
import { fetchPosts } from '../../../actions/post_actions';

import PostIndex from './post_index';

const mapStateToProps = state => {
  return ({
    posts: Object.values(state.posts).reverse(),
    currentUser: state.session.currentUser,
    users: state.users,
  });
};

const mapDispatchToProps = dispatch => {
   
  return ({
    fetchPosts: () => dispatch(fetchPosts())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
