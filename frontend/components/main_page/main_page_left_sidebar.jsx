import React from 'react';
import { Link } from 'react-router-dom';

export const PersonalInfo = () => {
    return (
      <div className="main-page-sidebar-left-side">
        <div>
          <Link to='/feed'>
            <p>News Feed</p>
          </Link>
          <a href="https://www.linkedin.com/in/1ironsochen/">
            <img
              className="footer-logo"
              src="http://www.free-icons-download.net/images/linkedin-logo-icon-786.png"
              alt="Visit My LinkedIn" />
            <p> Like what you see? <br/> Visit My LinkedIn! </p>
          </a>
          <a href="https://github.com/KaiFujimoto">
            <img
              className="footer-logo"
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              alt="Visit My Github" />
            <p> Link to My Github! </p>
          </a>
        </div>
      </div>
    );
};

export default PersonalInfo;
