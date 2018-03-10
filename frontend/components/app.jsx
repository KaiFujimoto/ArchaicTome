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
import MainPage from './main_page/main_page';
import UserProfileMain from './profile_pages/user_profile_main';

const App = () => {
  return (
    <div>
      <AuthRoute path="/" exact component={SignIn} />
      <ProtectedRoute path="/feed" component={MainPage} />
      <ProtectedRoute path="/profile/:id" component={UserProfileMain} />
    </div>
  );
};

export default App;
