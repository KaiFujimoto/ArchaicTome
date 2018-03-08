import React from 'react';
import { timeUtil } from '../../../util/time_util';

const PostIndexItem = (props, deletePost, updatePost) => {
  return (
    <div className='post-index-detailed'>
      <ul className="user-related-things">
        <ul className="user-related-things-left">
          <ul>
            <img src={props.author.image_url}></img>
          </ul>
          <ul className="user-name-timestamps">
            <li>{props.author.first_name + ' ' + props.author.last_name}</li>
            <span>{timeUtil(props.post.created_at)}</span>
          </ul>
        </ul>
        <ul className="user-related-things-right">
          dropdown menu
        </ul>
      </ul>
      <ul className="post-body-details">
        <p>{props.post.body}</p>
      </ul>
      <ul className="user-related-interactions">
        <li>👍 like</li>
        <li>💬 comment</li>
      </ul>
    </div>
  );
};

export default PostIndexItem;
// <img src={"data:image/jpeg;" + imageBase64} />
