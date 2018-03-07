import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar_container';

const MainPage = () => {
  return (
    <div className="main-page">
      <nav className="main-page-nav">
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
    </div>
  );
};

export default MainPage;
