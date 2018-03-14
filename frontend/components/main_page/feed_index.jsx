import React from 'react';
import { Link } from 'react-router-dom';

import CreatePostFormContainer from './post_form/create_post_form_container';
import FeedIndexContainer from './posts_index/feed_index_container';

const FeedIndex = (props) => {
  if (Object.values(props.posts).length < 1) {
    return null;
  }
  if (Object.values(props.users).length < 1) {
    return null;
  }
    return (
      <div>
        <ul>
          <CreatePostFormContainer />
        </ul>
        <ul>
          <FeedIndexContainer />
        </ul>
      </div>
    );
};

// <FeedIndexContainer />

export default FeedIndex;
