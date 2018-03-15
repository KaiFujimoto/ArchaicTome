import { searchUsers } from '../util/user_util';

export const USER_SEARCH_RESULTS = 'USER_SEARCH_RESULTS';

export const userSearchResults = (results) => {
  return ({
    type: USER_SEARCH_RESULTS,
    results
  });
};

export const userSearch = (query) => {
  return dispatch => {
    return searchUsers(query).then((results) => {
      return dispatch(userSearchResults(results));
    });
  };
};
