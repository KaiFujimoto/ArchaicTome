import { connect } from 'react-redux';
import React from 'react';
import { fetchAllUsers } from '../../actions/user_actions';

import AutoSuggestSearch from './auto_suggest_search';

const mapStateToProps = (state) => {
  return ({
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AutoSuggestSearch);
