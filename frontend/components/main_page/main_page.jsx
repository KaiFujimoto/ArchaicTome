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
        <h1>a</h1>
        <ul>
          Placeholder for Searchbar
          image placeholder for searchbar
        </ul>
        <ul>
          <NavBarContainer />
        </ul>
      </nav>
    </div>
  );
};

export default MainPage;
