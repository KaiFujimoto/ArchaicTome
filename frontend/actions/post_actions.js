import * as PostsApiUtil from '../util/posts_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveAllPosts = payload => {

  return ({
    type: RECEIVE_ALL_POSTS,
    posts: payload.posts,
    users: payload.users,
    comments: payload.comments
  });
};

export const receivePost = post => {
  return ({
    type: RECEIVE_POST,
    post
  });
};

export const removePost = (postId) => {
  return ({
    type: REMOVE_POST,
    postId
  });
};

export const receivePostErrors = (errors) => {
  return ({
    type: RECEIVE_POST_ERRORS,
    errors
  });
};

export const fetchPosts = (userId) => {
  return dispatch => {
    return PostsApiUtil.fetchPosts(userId).then(payload => {
      dispatch(receiveAllPosts(payload));
    }, err => {
      return (
      dispatch(receivePostErrors(err.responseJSON))
      );
    });
  };
};

export const fetchPost = (postId) => {
  return dispatch => {
    return PostsApiUtil.fetchPost(postId).then(post => {
      dispatch(receivePost(post));
    }, err => {
        dispatch(receivePostErrors(err.responseJSON));
    });
  };
};

export const createPost = (data) => {
   
  return dispatch => {
    return PostsApiUtil.createPost(data).then(post => {
      dispatch(receivePost(post));
    }, err => {
      return (
        dispatch(receivePostErrors(err.responseJSON))
      );
    });
  };
};

export const updatePost = (postId) => {
  return dispatch => {
    return PostsApiUtil.updatePost(postId).then(payload => {
      dispatch(receivePost(payload));
    }, err => {
      dispatch(receivePostErrors(err.responseJSON));
    });
  };
};

export const deletePost = (postId) => {
  return dispatch => {

    return PostsApiUtil.deletePost(postId).then((post) => {
      dispatch(removePost(post.id));
    });
  };
};
