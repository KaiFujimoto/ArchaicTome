import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = (comment) => {
  return ({
    type: RECEIVE_COMMENT,
    comment
  });
};

export const receiveCommentErrors = (errors) => {
  return ({
    type: RECEIVE_COMMENT,
    error
  });
};


export const removeComment = (commentId) => {
  return ({
    type: REMOVE_COMMENT,
    commentId
  });
};

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS
  });
};

export const createComment = (comment) => {
  return dispatch => {
    return CommentApiUtil.createComment(comment).then(comment => {
      dispatch(receivePost(comment));
    }, err => {
      return (
        dispatch(receiveCommentErrors(err.responseJSON))
      );
    });
  };
};

export const updateComment = (commentId) => {
  return dispatch => {
    return CommentApiUtil.updateComment(commentId).then(comment => {
      dispatch(receiveComment(comment));
    }, err => {
      dispatch(receiveCommentErrors(err.responseJSON));
    });
  };
};

export const deleteComment = (commentId) => {
  return dispatch => {
    return CommentApiUtil.deleteComment(commentId).then((comment) => {
      dispatch(removeComment(comment.id));
    });
  };
};
