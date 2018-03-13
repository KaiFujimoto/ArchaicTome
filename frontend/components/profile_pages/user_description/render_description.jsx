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
          <div className='user-information-list'>
            <p>
              ✉️ Email: {this.props.profileUser.email}
              <br />
              🎂 Birthday: {this.props.profileUser.birth_date}
              <br />
              <br />
              About {this.props.profileUser.first_name}:
              <br />
              <br />
              {this.props.profileUser.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return ({
    profileUser: ownProps.profileUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updatePost: (postId) => dispatch(updatePost(postId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDescription);
