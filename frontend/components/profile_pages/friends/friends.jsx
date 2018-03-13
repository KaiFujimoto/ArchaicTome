import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentFriendships(this.props.match.params.id);
    this.props.fetchAllUsers();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id != newProps.match.params.id) {
      this.props.fetchCurrentFriendships(this.props.match.params.id);
    }
  }

  render() {
    if (Object.values(this.props.users).length < 2) {
      return null;
    }
    if (this.props.match.params.id === undefined) {
      return null;
    }

    let friendMap = this.props.friends.map(friend => {
      let friendName;
        if (friend.user_id === parseInt(this.props.match.params.id)) {
          friendName = this.props.users[friend.friend_id];
        } else {
          friendName = this.props.users[friend.user_id];
        }
        return (
          <div key={friend.updated_at} className="friends-list-item">
            <Link to={`/profile/${friendName.id}`}><img src={friendName.image_url}></img></Link>
          </div>
        );
      });

    let friends;
    if (this.props.friends.length < 1) {
      friends = 'No friends yet';
    } else {
      friends = (
        <div>
          <p>
            <img src={window.friends}></img>
            Friends · {this.props.friends.length}
          </p>

          <div className="friends-list">
            {friendMap}
          </div>
        </div>
      );
    }

    return (
      <div className="friend-list">
        {friends}
      </div>
    );
  }
}

export default FriendsIndex;
