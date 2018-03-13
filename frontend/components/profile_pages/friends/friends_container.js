import { connect } from 'react-redux';
import React from 'react';
import { fetchCurrentFriendships } from '../../../actions/friend_actions';
import { closeProModal } from '../../../actions/modal_actions';

import FriendsIndex from './friends';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    friends: Object.values(state.friends),
    profileUser: ownProps.profileUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchCurrentFriendships: (userId) => dispatch(fetchCurrentFriendships(userId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);
