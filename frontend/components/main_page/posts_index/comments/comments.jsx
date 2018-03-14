import React from 'react';
import NewCommentContainer from './new_comment_container';
import CommentsDropdownMenuContainer from './comments_dropdown_container';
import Modal from './edit_comments/edit_modal';
import { Link } from 'react-router-dom';

class Comments extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {this.props.comments.map( comment => {
          return (
            <div
              key={comment.id}
              className='comment'>
              <Modal comment={comment}/>
              <div className='comment-profile-icon'>
                <Link to={`/profile/${comment.author_id}`}>
                  <img src={this.props.users[comment.author_id].image_url}></img>
                </Link>
              </div>
              <div className='inner-comment'>
                <Link to={`/profile/${comment.author_id}`}>
                  <p style={{paddingLeft: 10}}>{this.props.users[comment.author_id].first_name + ' ' + this.props.users[comment.author_id].last_name}</p>
                </Link>
                <p style={{paddingLeft: 10}} className='inner-comment-name'>{comment.body}</p>
              </div>
              <div className='button-hover'>
                {comment.author_id === this.props.currentUser.id ?
                <CommentsDropdownMenuContainer comment={comment}/> : ''}
              </div>
            </div>
          );
        })}
        <div>
          <NewCommentContainer post={this.props.post}
          author={this.props.currentUser}/>
        </div>
      </div>
    );
  }
}

export default Comments;
