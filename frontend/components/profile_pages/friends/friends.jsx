import React from 'react';
import ReactDOM from 'react-dom';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentFriendships(this.props.currentUser.id);
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
                  <img src={friend.image_url}></img>
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
