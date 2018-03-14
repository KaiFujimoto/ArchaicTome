import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchPosts } from '../../actions/post_actions';
import {
  withRouter
} from 'react-router-dom';

import MainPage from './main_page';

const mapStateToProps = (state) => {
  return ({
    users: state.users,
    posts: state.posts,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchPosts: (userId) => dispatch(fetchPosts(userId))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
