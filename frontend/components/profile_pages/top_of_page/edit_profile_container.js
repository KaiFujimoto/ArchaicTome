import { connect } from 'react-redux';
import React from 'react';
import { updateUser } from '../../../actions/user_actions';
import { closeProModal } from '../../../actions/modal_actions';

import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
  return ({
    errors: state.userErrors,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: (userId) => dispatch(updateUser(userId)),
    closeProModal: () => dispatch(closeProModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
