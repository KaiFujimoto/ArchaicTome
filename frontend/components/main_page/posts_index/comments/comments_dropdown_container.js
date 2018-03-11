import { deleteComment } from '../../../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentDropdownMenu from './comments_dropdown_menu';
import { openEditModal, closeEditModal } from '../../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    comment: ownProps.comment,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
    closeEditModal: () => dispatch(closeEditModal()),
    openEditModal: (modal) => dispatch(openEditModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentDropdownMenu);
