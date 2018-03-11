import React from 'react';

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
                <img src={this.props.author.image_url}></img>
              </div>
              <div className='inner-comment'>
                <p style={{paddingLeft: 10}}>{this.props.author.first_name + this.props.author.last_name}</p>
                <p style={{paddingLeft: 10}} className='inner-comment-name'>{comment.body}</p>
              </div>
              <button onClick={() => this.props.deleteComment(comment.id)}>x</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
