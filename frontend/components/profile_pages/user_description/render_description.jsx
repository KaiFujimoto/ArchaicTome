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
          <div className='img-and-span-description'>
            <img src={window.description}></img>
            <span>Intro</span>
          </div>
          <p>
            ✉️ Email: {this.props.user.email}
            <br />
            🎂 Birthday: {this.props.user.birth_date}
            <br />
            <br />
            About {this.props.user.first_name}:
            <br />
            <br />
            {this.props.user.description}
          </p>
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
