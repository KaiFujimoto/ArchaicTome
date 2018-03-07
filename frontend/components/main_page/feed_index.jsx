import React from 'react';
import { Link } from 'react-router-dom';

import CreatePostFormContainer from './post_form/create_post_form_container';


const FeedIndex = () => {
    return (
      <div>
        <ul>
          <CreatePostFormContainer />
        </ul>
      </div>
    );
};


export default FeedIndex;
