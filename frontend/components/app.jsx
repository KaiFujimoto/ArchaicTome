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

import SignIn from './session_form/sign_in.jsx';
import MainPage from './main_page/main_page.jsx';

const App = () => {
  return (
    <div>
      <AuthRoute path="/" exact component={SignIn} />
      <ProtectedRoute path="/feed" component={MainPage} />
    </div>
  );
};

export default App;
