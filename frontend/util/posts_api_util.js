export const fetchPosts = (userId) => {
  return $.ajax({
    url: '/api/posts',
    method: 'GET',
    data: {
      userId
    }
  });
};

export const fetchPost = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}`,
    method: 'GET'
  });
};

export const createPost = (data) => {
   
  return $.ajax({
    url: `/api/posts`,
    method: 'POST',
    data: {
      post:
      {
        body: data.body,
        receiver_id: data.receiver_id
      }
   }
  });
};

export const updatePost = (post) => {
  return $.ajax({
    url: `/api/posts/${post.id}`,
    method: 'PATCH',
    data: { post }
  });
};

export const deletePost = (postId) => {
  return $.ajax({
    url: `/api/posts/${postId}`,
    method: 'DELETE'
  });
};
