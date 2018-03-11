import { connect } from 'react-redux';
import React from 'react';
import { createComment } from '../../../../actions/comment_actions';

import CommentForm from './new_comment';


export const mapStateToProps = (state, ownProps) => {
  return ({
    comment: { body: '', postId: ownProps.post.id },
    formType: 'createComment',
    author: ownProps.author
  });
};

export const mapDispatchToProps = dispatch => {
  return ({
    action: (comment) => dispatch(createComment(comment))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
