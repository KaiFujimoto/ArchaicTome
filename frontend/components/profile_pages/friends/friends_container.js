import { connect } from 'react-redux';
import React from 'react';
import { fetchCurrentFriendships } from '../../../actions/friend_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import { closeProModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

import FriendsIndex from './friends';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    profileUser: ownProps.profileUser,
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchCurrentFriendships: (userId) => dispatch(fetchCurrentFriendships(userId)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsIndex));
