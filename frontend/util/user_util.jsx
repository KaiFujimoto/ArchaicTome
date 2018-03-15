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


// create new action for the updates
export const updateUser = (user) => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    contentType: false,
    processData: false,
    dataType: 'json',
    data: user
  });
};

export const searchUsers = query => {
    return $.ajax({
      url: '/api/users/',
      method: 'GET',
      data: { query }
    });
};
