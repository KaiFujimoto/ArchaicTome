import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(this.props.match.params.id);
    this.props.fetchAllUsers(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id != newProps.match.params.id) {
      this.props.fetchPosts(this.props.match.params.id);
    }
  }

  render() {
    const posts = this.props.posts.map( post => {
      const author = this.props.users[post.author_id];
      const receiver = this.props.users[post.receiver_id];
      return (
        <PostIndexItem
          key={post.id}
          profileUser={this.props.profileUser}
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
