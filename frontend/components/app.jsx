import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SignIn from './session_form/sign_in';
import MainPageContainer from './main_page/main_page_container';
import UserProfileMainContainer from './profile_pages/user_profile_main_container';
import NavBarContainer from './main_page/nav_bar_container';

const App = () => {
  return (
    <div>
      <AuthRoute path="/" exact component={SignIn} />
      <ProtectedRoute path="/" component={NavBarContainer}/>
      <ProtectedRoute path="/feed" component={MainPageContainer} />
      <ProtectedRoute path="/profile/:id" component={UserProfileMainContainer} />
    </div>
  );
};

export default App;
