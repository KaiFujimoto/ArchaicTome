import React from 'react';
import { closeProModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import EditProfileContainer from './edit_profile_container';
import EditCoverPhotoContainer from './edit_cover_photo_container';
import EditProfilePhotoContainer from './edit_profile_photo_container';

function Modal({modal, closeProModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'edit':
      component = <EditProfileContainer />;
      break;
    case 'cover':
      component = <EditCoverPhotoContainer />;
      break;
    case 'profile':
      component = <EditProfilePhotoContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background-two" onClick={closeProModal}>
      <div className="modal-child-two" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeProModal: () => dispatch(closeProModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
