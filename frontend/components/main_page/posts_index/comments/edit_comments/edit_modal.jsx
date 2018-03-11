import React from 'react';
import { closeEditModal } from '../../../../../actions/modal_actions';
import { connect } from 'react-redux';
import EditCommentContainer from './edit_comment_container';

function Modal({modal, props, closeEditModal}) {
  if (!modal) {
    return null;
  }
  let component = null;
  if (modal.type === 'editcomment' && modal.commentId === props.comment.id) {
      component = <EditCommentContainer comment={props.comment}/>;
      return (
        <div className="modal-background3" onClick={closeEditModal}>
          <div className="modal-child3" onClick={e => e.stopPropagation()}>
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
    closeEditModal: () => dispatch(closeEditModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
