import { connect } from 'react-redux';
import { sendFriendRequest } from '../../../actions/friend_actions';

import CoverPhoto from './cover_photo';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    profileUser: ownProps.profileUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openProModal: modal => dispatch(openProModal(modal)),

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CoverPhoto);
