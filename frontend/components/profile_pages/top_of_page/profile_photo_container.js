import { connect } from 'react-redux';
import { openProModal } from '../../../actions/modal_actions';
import { updateUser } from '../../../actions/user_actions';

import ProfilePhoto from './profile_photo';


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
    updateUser: (user) => dispatch(updateUser(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhoto);
