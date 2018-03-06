import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignIn from './session_form/sign_in.jsx';

const App = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default App;
