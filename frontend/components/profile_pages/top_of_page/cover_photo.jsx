import { connect } from 'react-redux';
import React from 'react';
import { openProModal } from '../../../actions/modal_actions';

export class CoverPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    e.stopPropagation();
    this.props.openProModal();
  }

  render() {
    return (
      <div className='cover-photo-image'>
        <img src={this.props.profileUser.cover_url}></img>
        {this.props.currentUser.id === this.props.profileUser.id ? <button onClick={this.handleEdit}>
            <img src={window.pencil2}></img>
            Edit Profile
          </button> : '' }
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    profileUser: ownProps.profileUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openProModal: modal => dispatch(openProModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CoverPhoto);
