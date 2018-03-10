import React from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/post_actions';

class UserDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='user-description'>
        <div>
          <img src={window.description}></img>
          Intro
          <p>{this.props.user.description}</p>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    user: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updatePost: (postId) => dispatch(updatePost(postId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDescription);
