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

import NavBarContainer from './nav_bar_container';
import FeedIndex from './feed_index';

const MainPage = () => {
  return (
    <div className="main-page">
      <ul className='main-page-body'>
        <ul className='main-page-left-menu'>
          Placeholder
        </ul>
        <ul>
          <FeedIndex />
        </ul>
        <ul className='main-page-news-feed'>
          Placeholder
        </ul>
      </ul>
    </div>
  );
};

export default MainPage;
