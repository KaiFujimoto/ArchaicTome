import { connect } from 'react-redux';
import React from 'react';
import { updateComment, deleteComment } from '../../../../actions/comment_actions';

import Comments from './comments';

export const mapStateToProps = (state, ownProps) => {
  return ({
    comments: ownProps.comments,
    author: ownProps.author
  });
};

export const mapDispatchProps = dispatch => {
  return ({
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  });
};

export default connect(mapStateToProps, mapDispatchProps)(Comments);
