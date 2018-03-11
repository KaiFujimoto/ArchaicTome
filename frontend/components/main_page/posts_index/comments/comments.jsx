import React from 'react';
import NewCommentContainer from './new_comment_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.comments.map( comment => {
          return (
            <div key={comment.id} className='comment'>
              <div className='comment-profile-icon'>
                <img src={this.props.users[comment.author.id].image_url}></img>
              </div>
              <div className='inner-comment'>
                <p style={{paddingLeft: 10}}>{comment.author.first_name + ' ' + comment.author.last_name}</p>
                <p style={{paddingLeft: 10}} className='inner-comment-name'>{comment.body}</p>
              </div>
                {comment.author.id === this.props.currentUser.id ?
                <button onClick={() => this.props.deleteComment(comment.id)}>x</button> : ''}
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
