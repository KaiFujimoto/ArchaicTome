import React from 'react';
import { closeProModal } from '../../../actions/modal_actions';
import { connect } from 'react-redux';
import EditProfileContainer from './edit_profile_container';

function Modal({modal, closeProModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'edit':
      component = <EditProfileContainer />;
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
