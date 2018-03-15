import { connect } from 'react-redux';

import { updateUser } from '../../../actions/user_actions';
import { closeProModal } from '../../../actions/modal_actions';

import EditCoverPhoto from './edit_cover_photo';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: (userId) => dispatch(updateUser(userId)),
    closeProModal: () => dispatch(closeProModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCoverPhoto);
