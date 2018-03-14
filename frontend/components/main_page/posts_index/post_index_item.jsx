import React from 'react';
import { timeUtil } from '../../../util/time_util';
import PostDropdownMenuContainer from './post_dropdown_menu_container';
import Modal from './edit_posts/modal';
import CommentsContainer from './comments/comments_container';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => {
  if (props.author === undefined) {
    return null;
  }
  if (props.receiver === undefined) {
    return null;
  }

  const authorFullName = props.author.first_name + ' ' + props.author.last_name;
  const receiverFullName = props.receiver.first_name + ' ' + props.receiver.last_name;
  const commentsArray = props.comments.map( comment => {
    if (comment.post_id === props.post.id) return comment;
  });
  const comments = commentsArray.filter(el => el != undefined);
  return (
    <div className='post-index-detailed'>
      <Modal post={props.post}/>
      <ul className="user-related-things">
        <ul className="user-related-things-left">
          <ul>
            <Link to={`/profile/${props.author.id}`}>
              <img src={props.author.image_url}></img>
            </Link>
          </ul>
          <ul className="user-name-timestamps">
            <li>
              <Link to={`/profile/${props.author.id}`}>{authorFullName}</Link>
              {receiverFullName === authorFullName ? '' :
                <Link to={`/profile/${props.receiver.id}`}>{' ▸ ' + receiverFullName}</Link>}
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
        <CommentsContainer comments={comments} users={props.users} post={props.post}/>
      </ul>
    </div>
  );
};

export default PostIndexItem;
