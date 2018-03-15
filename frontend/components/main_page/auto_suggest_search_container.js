import { connect } from 'react-redux';
import React from 'react';
import { userSearch } from '../../actions/search_actions';

import AutoSuggestSearch from './auto_suggest_search';

const mapStateToProps = (state) => {
  return ({
    searchResults: state.searchResults
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    userSearch: (query) => dispatch(userSearch(query))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggestSearch);
