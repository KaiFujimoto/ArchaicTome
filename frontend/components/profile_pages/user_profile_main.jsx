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
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchUser(this.props.match.params.id);
    }
  }
  render() {
    if (this.props.user === undefined) {
      return null;
    }
    return (
      <div className="profile-page">
        <div className='profile-page-body'>
          <div className='profile-page-top'>
            <div className='profile-photos'>
                <CoverPhoto profileUser={this.props.user}/>
                  {this.props.user.id === this.props.currentUser.id ? <Modal /> : '' }
                <ProfilePhoto profileUser={this.props.user}/>
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
            <UserDescription profileUser={this.props.user}/>
            <div className='friend-icons'>
              <FriendsContainer profileUser={this.props.user}/>
            </div>
          </div>
          <div className='profile-page-postings'>
            <CreatePostFormContainer />
            <PostIndexContainer profileUser={this.props.user}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.users[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileMain);
