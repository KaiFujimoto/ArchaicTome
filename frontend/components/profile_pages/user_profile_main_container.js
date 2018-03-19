import { connect } from 'react-redux';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import {
  withRouter
} from 'react-router-dom';

import UserProfileMain from './user_profile_main';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.users[ownProps.match.params.id],
    users: state.users
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPosts: (userId) => dispatch(fetchPosts(userId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfileMain));
