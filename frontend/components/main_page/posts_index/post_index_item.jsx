import React from 'react';
import { timeUtil } from '../../../util/time_util';
import PostDropdownMenuContainer from './post_dropdown_menu_container';
import Modal from './edit_posts/modal';

const PostIndexItem = (props) => {
  const authorFullName = props.author.first_name + ' ' + props.author.last_name;
  const receiverFullName = props.receiver.first_name + ' ' + props.receiver.last_name;
   
  return (
    <div className='post-index-detailed'>
      <Modal post={props.post}/>
      <ul className="user-related-things">
        <ul className="user-related-things-left">
          <ul>
            <img src={props.author.image_url}></img>
          </ul>
          <ul className="user-name-timestamps">
            <li>
              {authorFullName}
              {receiverFullName === authorFullName ? '' : ' ▸ ' + receiverFullName}
            </li>
            <span>{timeUtil(props.post.updated_at)}</span>
          </ul>
        </ul>
        <ul className="user-related-things-right">
          { props.post.author_id === props.currentUser.id ?
          <PostDropdownMenuContainer post={props.post}/> : '' }
        </ul>
      </ul>
      <ul className="post-body-details">
        <p>{props.post.body}</p>
      </ul>
      <ul className="user-related-interactions">
        <li>
          <img className='difficult-like' src={window.like}/>
          <p className='sadlyfe'>Like</p>
        </li>
        <li>
          <img className='difficult-comment' src={window.comment}/>
          <p className='difficult-comment-label'>Comment</p>
        </li>
      </ul>
      <ul>
      </ul>
    </div>
  );
};

export default PostIndexItem;
// <img src={"data:image/jpeg;" + imageBase64} />
