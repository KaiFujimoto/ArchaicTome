import { connect } from 'react-redux';
import React from 'react';
import { updatePost } from '../../../../actions/post_actions';
import { closeModal } from '../../../../actions/modal_actions';

import EditPost from './edit_post';

const mapStateToProps = (state, ownProps) => {

  return ({
    post: ownProps.post,
    errors: state.postErrors,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updatePost: (postId) => dispatch(updatePost(postId)),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
