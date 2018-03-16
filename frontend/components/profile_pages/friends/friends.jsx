import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class FriendsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id != newProps.match.params.id) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    if (Object.values(this.props.users).length < 2) {
      return null;
    }
    if (this.props.match.params.id === undefined) {
      return null;
    }
    let friendMap = this.props.profileUser.friend_ids.map(id => {
      let friendName;
        if (id === parseInt(this.props.match.params.id)) {
          friendName = this.props.users[this.props.profileUser.id];
        } else {
          friendName = this.props.users[id];
        }
        return (
          <div key={Math.floor(Math.random() * 10000)} className="friends-list-item">
            <Link to={`/profile/${friendName.id}`}><img src={friendName.image_url}></img></Link>
          </div>
        );
      });

    let friends;
    if (this.props.profileUser.friend_ids.length < 1) {
      friends = 'No friends yet';
    } else {
      friends = (
        <div>
          <p>
            <img src={window.friends}></img>
            Friends · {this.props.profileUser.friend_ids.length}
          </p>

          <div className="friends-list">
            {friendMap.length > 9 ? friendMap.slice(0,9) : friendMap}
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
