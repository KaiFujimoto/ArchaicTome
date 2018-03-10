import { connect } from 'react-redux';
import React from 'react';

export const CoverPhoto = (props) => {
  return (
    <div className='cover-photo-image'>
      <img src={props.currentUser.cover_url}></img>
    </div>
  );
};


const mapStateToProps = state => {
  return ({
    currentUser: state.session.currentUser
  });
};

export default connect(mapStateToProps)(CoverPhoto);
