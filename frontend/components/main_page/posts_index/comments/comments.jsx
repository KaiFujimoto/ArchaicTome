import React from 'react';
import NewCommentContainer from './new_comment_container';
import CommentsDropdownMenuContainer from './comments_dropdown_container';
import Modal from './edit_comments/edit_modal';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   hidden: 'hidden'
    // };
    // this.handleMouse = this.handleMouse.bind(this);
  }
  //
  // handleMouse(e) {
  //   e.stopPropagation();
  //   if (this.state.hidden === "hidden") {
  //     return this.setState({hidden: "shown"});
  //   } else {
  //     return this.setState({hidden: "hidden"});
  //   }
  // }

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
                <img src={this.props.users[comment.author.id].image_url}></img>
              </div>
              <div className='inner-comment'>
                <p style={{paddingLeft: 10}}>{comment.author.first_name + ' ' + comment.author.last_name}</p>
                <p style={{paddingLeft: 10}} className='inner-comment-name'>{comment.body}</p>
              </div>
              <div className='button-hover'>
                {comment.author.id === this.props.currentUser.id ?
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
