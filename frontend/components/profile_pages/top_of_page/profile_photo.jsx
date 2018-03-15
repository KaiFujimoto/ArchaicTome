import { connect } from 'react-redux';
import React from 'react';

export default class ProfilePhoto extends React.Component {
  constructor(props) {
    super(props);

    this.handleCover = this.handleCover.bind(this);
  }

  handleCover(e) {
    e.stopPropagation();
    this.props.openProModal('profile');
  }

  render() {
    return (
      <div className='profile-photo-image'>
        <img src={this.props.profileUser.image_url}></img>
        {this.props.currentUser.id === this.props.profileUser.id ?
          <button
            className="button-to-edit-profile-photo"
            onClick={this.handleCover}>
            <img src={window.camera}></img>
            <p>Change Profile <br/> Picture</p>
          </button> : '' }
      </div>
    );
  }
}
