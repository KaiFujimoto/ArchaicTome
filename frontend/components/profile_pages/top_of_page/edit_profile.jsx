import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { days, months, years } from '../../../util/date_util';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  updateBody(input) {
    return e => {
      this.setState({[input]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state).then(() => {
      this.props.closeProModal();
      this.props.clearErrors();
    });
  }

  renderErrors() {
    return(
      <ul className='edit-profile-errors'>
        <li>Some fields appear to be blank. Please fill them out</li>
      </ul>
    );
  }

  render() {
    return (
      <div className="edit-profile-form">
        <h4>
          <p>Edit Profile</p>
          <button
            onClick={this.props.closeProModal} className="close-x" value='x'>x</button>
        </h4>
        <ul className="edit-profile-insides">
          <p>
            <img src={this.state.image_url}></img>
          </p>
          <form className="edit-profile-form-form" onSubmit={this.handleSubmit}>
            <div className="edit-profile-form-names">
                <input
                  defaultValue={this.state.first_name}
                  placeholder="Update First name"
                  type="text"
                  onChange={this.updateBody('first_name')}
                 />

                <input
                  onChange={this.updateBody('last_name')}
                  placeholder="Update Last name"
                  type="text"
                  defaultValue={this.state.last_name}
                  ></input>
            </div>
            <ul className="edit-profile-form-emails">
              <input
                onChange={this.updateBody('email')}
                placeholder="Update Email"
                type="text"
                defaultValue={this.state.email}
                ></input>
            </ul>
            <ul className="other-half-of-form-profile">
              <li>
                <p>Change Gender</p>
                <ul>
                  <select
                    defaultValue={this.state.gender}
                    onChange={this.updateBody('gender')}
                    >
                    <option disabled value='gender'>Gender</option>
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                  </select>
                </ul>
              </li>
              <ul>
                {this.props.errors.errors && this.props.errors.errors.length > 0 ? this.renderErrors() : ''}
              </ul>
            </ul>
          </form>
        </ul>
        <ul className='buttons-ul'>
          <button
            className='button-to-save-edit' onClick={this.handleSubmit}>Save</button>
        </ul>
      </div>
    );
  }

}

export default EditProfile;
