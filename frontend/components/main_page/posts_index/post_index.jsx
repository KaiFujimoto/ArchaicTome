import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="post-index">
        {this.props.posts.map( post => {
          return (
            <PostIndexItem
              key={post.id}
              post={post}
              deletePost={this.props.deletePost}
              updatePost={this.props.updatePost}
            />
          );
        })
       }
      </div>
    );
  }
}

export default PostIndex;
