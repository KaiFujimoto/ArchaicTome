import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import NavBarContainer from '../main_page/nav_bar_container';
import CoverPhoto from './top_of_page/cover_photo';
import ProfilePhoto from './top_of_page/profile_photo';
import UserDescription from './user_description/render_description';
import PostIndexContainer from '../main_page/posts_index/post_index_container';
import CreatePostFormContainer from '../main_page/post_form/create_post_form_container';

const UserProfileMain = () => {
  return (
    <div className="profile-page">
      <nav className="profile-page-nav">
        <h1>
          <button>
            <Link to='/feed'>a</Link>
          </button>
        </h1>
        <ul>
          Placeholder for Searchbar
          🔍
        </ul>
        <ul>
          <NavBarContainer />
        </ul>
      </nav>
      <ul className='profile-page-body'>
        <ul className='profile-page-top'>
          <ul className='profile-photos'>
              <CoverPhoto />
              <ProfilePhoto />
            <ul className='profile-page-top-navbar'>
              <li className='first-one'>Timeline</li>
              <li>About</li>
              <li>Friends</li>
              <li className='last-one'>Photos</li>
            </ul>
          </ul>
        </ul>
        <ul>
        </ul>
      </ul>
      <ul className='profile-page-main-body'>
        <ul className='description-column'>
          <UserDescription />
          <ul>friend icons</ul>
          <ul>photo icons</ul>
        </ul>
        <ul className='profile-page-postings'>
          <CreatePostFormContainer />
          <PostIndexContainer />
        </ul>
      </ul>
    </div>
  );
};

export default UserProfileMain;
