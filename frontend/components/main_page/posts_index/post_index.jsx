import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map( post => {
      const author = this.props.users[post.author_id];
      if (author === undefined) {
        const users = this.props.users;
         
      }
      return (
        <PostIndexItem
          key={post.id}
          post={post}
          author={author}
          deletePost={this.props.deletePost}
          updatePost={this.props.updatePost}
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
