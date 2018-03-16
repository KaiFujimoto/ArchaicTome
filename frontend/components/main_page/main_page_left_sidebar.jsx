import React from 'react';
import { Link } from 'react-router-dom';

export const PersonalInfo = (props) => {
    return (
      <div className="main-page-sidebar-left-side">
        <Link to={`/profile/${props.currentUser.id}`}>
          <div className="main-page-sidebar-left-side-user">
            <img src={props.currentUser.image_url}/>
            <p>{props.currentUser.first_name + ' ' + props.currentUser.last_name}</p>
          </div>
        </Link>
        <Link to='/feed'>
          <div className="main-page-sidebar-left-side-user">
            <img src={window.newspaper}/>
            <p className="this-specific-news-feed-p">News Feed</p>
          </div>
        </Link>
        <a href="https://www.linkedin.com/in/1ironsochen/">
          <div className="main-page-sidebar-left-side-user">
            <img
              className="footer-logo"
              src="http://www.free-icons-download.net/images/linkedin-logo-icon-786.png"
              alt="Visit My LinkedIn" />
            <p> Visit My LinkedIn! </p>
          </div>
        </a>
          <a href="https://github.com/KaiFujimoto">
            <div className="main-page-sidebar-left-side-user">
              <img
                className="footer-logo"
                src="https://image.flaticon.com/icons/svg/25/25231.svg"
                alt="Visit My Github" />
              <p> Link to My Github! </p>
            </div>
          </a>
      </div>
    );
};

export default PersonalInfo;
