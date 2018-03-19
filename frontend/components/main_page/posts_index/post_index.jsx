import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id != newProps.match.params.id) {
      this.props.fetchPosts(newProps.match.params.id);
    }
  }

  render() {
    let profileUser;
    if (this.props.match.params.id) {
      profileUser = this.props.match.params.id;
    } else {
      profileUser = this.props.currentUser.id;
    }
    const posts = this.props.posts.map( post => {
      const author = this.props.users[post.author_id];
      const receiver = this.props.users[post.receiver_id];
      return (
        <PostIndexItem
          key={post.id}
          profileUser={profileUser}
          post={post}
          currentUser={this.props.currentUser}
          author={author}
          receiver={receiver}
          comments={this.props.comments}
          users={this.props.users}
        />
      );
    });
    return (
      <div className="post-index">
        {posts}
      </div>
    );
  }
}
export default PostIndex;
