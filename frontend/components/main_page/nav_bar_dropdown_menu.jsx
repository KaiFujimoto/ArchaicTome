import React from 'react';
import { Link } from 'react-router-dom';

class NavbarDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: "closed-nav",
    };
    this.toggleDropClass = this.toggleDropClass.bind(this);
    this.friendRequests = this.friendRequests.bind(this);
  }

  toggleDropClass(e) {
      if (this.state.drop === "closed-nav") {
        return this.setState({drop: "open-nav"});
      } else {
        return this.setState({drop: "closed-nav"});
      }
  }

  handleAdd(friend) {
    return e => {
      this.props.acceptFriendRequest(friend.id);
    };
  }

  handleReject(friend) {
    return e => {
      this.props.deleteFriendRequest(friend.id);
    };
  }

  friendRequests() {
    const friends = this.props.users[this.props.currentUser.id].pending_friends;
    return (
      friends.map(friend => {
        const friendObject = this.props.users[friend];
          return (
            <div key={friendObject.id} className="friend-dropdown-menu">
              <div className="link-to-profile-dropdown">
                <Link to={`/profile/${friendObject.id}`}>
                  <img src={friendObject.image_url}></img>
                  <p>{friendObject.first_name + ' ' + friendObject.last_name}</p>
                </Link>
              </div>
              <div>
                <div className='div-for-accept-button'>
                  <button
                    className='accept-friend-button'
                    onClick={this.handleAdd(friendObject)}>Confirm
                  </button>
                </div>
                <div>
                  <button
                    className='reject-friend-button'
                    onClick={this.handleReject(friendObject)}>Delete Request</button>
                </div>
              </div>
            </div>
          );
        })
      );
    }

  render() {

    if (this.props.users[this.props.currentUser.id] === undefined) {
      return null;
    }

    let people;
    if (this.props.users[this.props.currentUser.id].pending_friends.length > 0) {
        people = <img src={window.peoplenote}></img>;
    } else {
        people = <img src={window.people}></img>;
    }

    return (
      <div>
        <div className="dropdown-nav">
          <button onClick={this.toggleDropClass} className='dropdown-button-nav'>
            { this.state.drop === 'closed-nav' ?
              people
              :
              <img src={window.whitepeople}></img>
            }
          </button>
          <div className={`dropdown-screen-nav ${this.state.drop === 'closed-nav' ? 'closed-nav' : ''}`} onClick={this.toggleDropClass} />
          <div className={`dropdown-content-nav ${this.state.drop}`}>
            <div className="friend-request-header">
              <p>Friend Requests</p>
            </div>
            {
              this.props.users[this.props.currentUser.id].pending_friends.length > 0 ?
              this.friendRequests()
              :
              <p className="no-friend-requests-yet">No Requests</p>
            }
          </div>
        </div>
      </div>

    );
  }
}

export default NavbarDropDownMenu;
