import React from 'react';
import { closeModal } from '../../../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostContainer from './edit_posts_container';

function Modal({modal, props, closeModal}) {
  if (!modal) {
    return null;
  }
  let component = null;
  if (modal.type === 'edit' && modal.postId === props.post.id) {
      component = <EditPostContainer post={props.post}/>;
      return (
        <div className="modal-background" onClick={closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
          </div>
        </div>
      );
  } else {
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    props: ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
