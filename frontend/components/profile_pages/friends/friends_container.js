import { connect } from 'react-redux';
import React from 'react';
import { fetchAllUsers } from '../../../actions/user_actions';
import { closeProModal } from '../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

import FriendsIndex from './friends';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    profileUser: ownProps.profileUser,
    users: state.users,
    pendingFriends: state.friendRequests
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendsIndex));
