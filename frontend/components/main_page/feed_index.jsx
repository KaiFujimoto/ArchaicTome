import React from 'react';
import { Link } from 'react-router-dom';

import CreatePostFormContainer from './post_form/create_post_form_container';
import PostIndexContainer from './posts_index/post_index_container';

const FeedIndex = () => {
    return (
      <div>
        <ul>
          <CreatePostFormContainer />
        </ul>
        <ul>
          <PostIndexContainer />
        </ul>
      </div>
    );
};


export default FeedIndex;
