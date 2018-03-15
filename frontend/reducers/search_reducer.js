import {
  USER_SEARCH_RESULTS
} from '../actions/search_actions';

const searchReducer = (state=[], action) => {
  switch (action.type) {
    case USER_SEARCH_RESULTS:
      return action.results;
    default:
      return state;
  }
};

export default searchReducer;
