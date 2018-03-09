import { deletePost } from '../../../actions/post_actions';
import { connect } from 'react-redux';
import PostDropdownMenu from './post_dropdown_menu';
import { openModal, closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    post: ownProps.post,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    deletePost: (postId) => dispatch(deletePost(postId)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDropdownMenu);
