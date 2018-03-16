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
import SignUpFormContainer from './sign_up_form/sign_up_form_container';

const SignIn = () => {
  return (
    <div className="sign-in-page">
      <nav className="sign-in-page-nav">
        <h1>archaic tome</h1>
        <ul>
          <LoginFormContainer />
        </ul>
      </nav>

      <div className="sign-in-page-body">
        <img src="https://42796r1ctbz645bo223zkcdl-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/Sanzioblog2-1281x612.jpg"></img>
        <ul>
          <SignUpFormContainer />
        </ul>
      </div>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/1ironsochen/" target="_blank">
          <img
            className="footer-logo"
            src="http://www.free-icons-download.net/images/linkedin-logo-icon-786.png"
            alt="Visit My LinkedIn" />
          <p> Visit My LinkedIn! </p>
        </a>
        <span>ArchaicTome © 2018</span>
      </footer>
    </div>
  );
};

export default SignIn;
