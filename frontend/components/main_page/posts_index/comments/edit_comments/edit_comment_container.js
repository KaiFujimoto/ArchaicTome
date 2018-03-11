import { connect } from 'react-redux';
import React from 'react';
import { updateComment, clearErrors } from '../../../../../actions/comment_actions';
import { closeEditModal } from '../../../../../actions/modal_actions';

import EditComment from './edit_comment';

const mapStateToProps = (state, ownProps) => {
  return ({
    comment: ownProps.comment,
    errors: state.commentErrors,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    action: (commentId) => dispatch(updateComment(commentId)),
    closeEditModal: () => dispatch(closeEditModal()),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
