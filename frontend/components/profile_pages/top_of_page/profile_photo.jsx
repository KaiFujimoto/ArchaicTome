import { connect } from 'react-redux';
import React from 'react';

export const ProfilePhoto = (props) => {
  return (
    <div className='profile-photo-image'>
      <img src={props.profileUser.image_url}></img>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    profileUser: ownProps.profileUser
  });
};

export default connect(mapStateToProps)(ProfilePhoto);
