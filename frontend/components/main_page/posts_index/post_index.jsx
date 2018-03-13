import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    if (this.props.profileUser != undefined && this.props.profileUser.id === this.props.currentUser.id) {
      this.props.fetchPosts(this.props.currentUser.id);
    } else if (this.props.profileUser != undefined) {
      this.props.fetchPosts(this.props.profileUser.id);
    } else {
      this.props.fetchPosts(this.props.currentUser.id);
    }
  }

  render() {
    const posts = this.props.posts.map( post => {
      const author = this.props.users[post.author_id];
      const receiver = this.props.users[post.receiver_id];
      return (
        <PostIndexItem
          key={post.id}
          currentUser={this.props.currentUser}
          post={post}
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
