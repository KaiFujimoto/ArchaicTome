export const createComment = (payload) => {
  return $.ajax({
    url: '/api/comments',
    method: 'POST',
    data: {
      comment: {
        body: payload.body,
        post_id: payload.postId
      }
     }
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    url: `/api/comments/${comment.id}`,
    method: 'PATCH',
    data: { comment }
  });
};

export const deleteComment = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}`,
    method: 'DELETE'
  });
};
