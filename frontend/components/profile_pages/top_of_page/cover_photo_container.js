import { connect } from 'react-redux';
import { sendFriendRequest, acceptFriendRequest, deleteFriend } from '../../../actions/friend_actions';
import { openProModal } from '../../../actions/modal_actions';

import CoverPhoto from './cover_photo';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    profileUser: ownProps.profileUser,
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openProModal: modal => dispatch(openProModal(modal)),
    sendFriendRequest: (userId) => dispatch(sendFriendRequest(userId)),
    deleteFriend: (userId) => dispatch(deleteFriend(userId)),
    acceptFriendRequest: (userId) => dispatch(acceptFriendRequest(userId))
    // fetchPendingFriendships: (userId) => dispatch(fetchPendingFriendships(userId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CoverPhoto);
