export const fetchAllUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'GET'
  });
};

export const fetchUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}`,
    method: 'GET'
  });
};

export const updateUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  });
};
