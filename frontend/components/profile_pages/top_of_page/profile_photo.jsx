import { connect } from 'react-redux';
import React from 'react';

export const ProfilePhoto = (props) => {
  return (
    <div className='profile-photo-image'>
      <img src={props.currentUser.image_url}></img>
    </div>
  );
};


const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

export default connect(mapStateToProps)(ProfilePhoto);
