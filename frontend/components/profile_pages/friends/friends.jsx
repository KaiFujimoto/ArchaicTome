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
    return (
      <div className="friend-list">
        { this.props.friends.length < 1 ? 'No friends yet' :
        (<div>
          <p>
            <img src={window.friends}></img>
            Friends · {this.props.friends.length}</p>

          <div className="friends-list">
            {this.props.friends.map(friend => {
              let friendName;
              if (friend.user_id === this.props.match.params.id) {
                friendName = this.props.users[friend.friend_id];
              } else {
                friendName = this.props.users[friend.user_id];
              }
              return (
                <div key={friendName.id} className="friends-list-item">
                  <Link to={`/profile/${friendName.id}`}><img src={friendName.image_url}></img></Link>
                </div>
              );
            })}
          </div>
        </div> )}
      </div>
    );
  }
}

export default FriendsIndex;
