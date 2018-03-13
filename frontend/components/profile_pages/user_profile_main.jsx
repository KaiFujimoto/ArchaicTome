import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import NavBarContainer from '../main_page/nav_bar_container';
import CoverPhoto from './top_of_page/cover_photo';
import ProfilePhoto from './top_of_page/profile_photo';
import UserDescription from './user_description/render_description';
import PostIndexContainer from '../main_page/posts_index/post_index_container';
import CreatePostFormContainer from '../main_page/post_form/create_post_form_container';
import Modal from './top_of_page/profilemodal';
import FriendsContainer from './friends/friends_container';

export class UserProfileMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: this.props.currentUser
    };
  }

  componentWillReceiveProps(newProps, oldProps) {
    debugger
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchUser(newProps.match.params.id).then((user) => this.setState({profileUser: user}) );
    }
  }
  render() {
    return (
      <div className="profile-page">
        <div className='profile-page-body'>
          <div className='profile-page-top'>
            <div className='profile-photos'>
                <CoverPhoto />
                <Modal />
                <ProfilePhoto />
              <div className='profile-page-top-navbar'>
                <li className='first-one'>Timeline</li>
                <li>About</li>
                <li>Friends</li>
                <li className='last-one'>Photos</li>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='profile-page-main-body'>
          <div className='description-column'>
            <UserDescription />
            <div className='friend-icons'>
              <FriendsContainer />
            </div>
          </div>
          <div className='profile-page-postings'>
            <CreatePostFormContainer />
            <PostIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileMain);
