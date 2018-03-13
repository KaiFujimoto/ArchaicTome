import React from 'react';
import { withRouter } from 'react-router-dom';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: this.props.profileUser
    };
  }

  componentDidMount() {
    this.props.fetchPosts(this.state.profileUser.id);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(newProps) {
    let user;
    if (this.props.match.params.id != newProps.match.params.id) {
      user = this.props.users[newProps.match.params.id];

      this.setState({profileUser: user});
      this.props.fetchPosts(user.id);
      window.scrollTo(0, 0);
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
