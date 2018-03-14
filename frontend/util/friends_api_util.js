export const fetchPendingFriendships = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/pending_friends`
  });
};

export const sendFriendRequest = (userId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/send_request`,
  });
};

export const acceptFriendRequest = (userId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}/approve_request`
  });
};

export const deleteFriendRequest = (userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/reject_request`
  });
};
