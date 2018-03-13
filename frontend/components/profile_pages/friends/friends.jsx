import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUser: this.props.currentUser
    };
  }

  componentDidMount() {
    this.props.fetchCurrentFriendships(this.state.profileUser.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.profileUser.id != newProps.profileUser.id) {
      this.props.fetchCurrentFriendships(newProps.profileUser.id);
    }
  }

  render() {
    return (
      <div className="friend-list">
        { this.props.friends.length < 1 ? 'No friends yet' :
        (<div>
          <p>
            <img src={window.friends}></img>
            Friends · {this.props.friends.length}</p>

          <div className="friends-list">
            {this.props.friends.map(friend => {
              return (
                <div key={friend.id} className="friends-list-item">
                  <Link to={`/profile/${friend.id}`}><img src={friend.image_url}></img></Link>
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
