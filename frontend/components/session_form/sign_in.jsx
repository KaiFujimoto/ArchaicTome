import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import LoginFormContainer from './login_form/login_form_container';

const SignIn = () => {
  return (
    <div>
      <nav>
        <h1>ancient tome</h1>
        <ul>
          <LoginFormContainer />
        </ul>
      </nav>

      <p>
        <img src="https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/Sanzioblog2-1281x612.jpg"
          width="700" height="475"></img>
        
      </p>
    </div>
  );
};

export default SignIn;
