import { connect } from 'react-redux';
import React from 'react';
import { openProModal } from '../../../actions/modal_actions';

export default class CoverPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.acceptFriend = this.acceptFriend.bind(this);
  }

  addFriend(e) {
    this.props.sendFriendRequest(this.props.profileUser.id);
  }

  acceptFriend(e) {
    this.props.acceptFriendRequest(this.props.profileUser.id);
  }

  removeFriend(e) {
    this.props.deleteFriendRequest(this.props.profileUser.id);
  }

  handleEdit(e) {
    e.stopPropagation();
    this.props.openProModal('edit');
  }

  render() {
    return (
      <div className='cover-photo-image'>
        <img src={this.props.profileUser.cover_url}></img>
        {this.props.currentUser.id === this.props.profileUser.id ?
          <button onClick={this.handleEdit}>
            <img src={window.pencil2}></img>
            Edit Profile
          </button> : '' }
          { ((this.props.currentUser.id != this.props.profileUser.id) &&
            (this.props.profileUser.friend_ids.includes(this.props.currentUser.id))) ?
            <button
              className='add-friend green'
              onClick={this.removeFriend}
            >
              <p>✔ Friends</p>
            </button>
              :
            ''
          }}

          { ((this.props.currentUser.id != this.props.profileUser.id) && !(this.props.profileUser.friend_ids.includes(this.props.currentUser.id)) &&
            !(this.props.users[this.props.currentUser.id].pending_friends.includes(this.props.profileUser.id))) ?
           <button className='add-friend' onClick={this.addFriend}>
             <p>Add Friend</p>
           </button>
           :
           ''
          }

          { ((this.props.currentUser.id != this.props.profileUser.id) && !(this.props.profileUser.friend_ids.includes(this.props.currentUser.id)) &&
            (this.props.users[this.props.currentUser.id].pending_friends.includes(this.props.profileUser.id))) ?
           <button className='add-friend' onClick={this.acceptFriend}>
             <p>Pending Friend</p>
           </button>
           :
           ''
          }

          { ((this.props.currentUser.id != this.props.profileUser.id) &&
          (this.props.profileUser.pending_friends.includes(this.props.currentUser.id))) ?
          <button className='add-friend-pending'>
            <p>Pending</p>
          </button>
          :
          ''
          }
      </div>
    );
  }
}
