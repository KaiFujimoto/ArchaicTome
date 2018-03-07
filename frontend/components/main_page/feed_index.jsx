import React from 'react';
import { Link } from 'react-router-dom';

class FeedIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    return (
      <div>
        <ul>CreatePostForm</ul>
      </div>
    );
  }
}

export default FeedIndex;
