import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { days, months, years } from '../../../util/date_util';
import Textarea from 'react-expanding-textarea';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleKeypress(e){
    if (e.charCode == 13) {
      this.handleSubmit(e);
    } else {
      this.props.clearErrors();
    }
  }

  updateBody(input) {
    return e => {
      this.setState({[input]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append('user[first_name]', this.state.first_name);
    formData.append('user[last_name]', this.state.last_name);
    formData.append('user[email]', this.state.email);
    formData.append('user[gender]', this.state.gender);
    formData.append('user[description]', this.state.description);

    this.props.updateUser(formData).then(() => {
      this.props.closeProModal();
      this.props.clearErrors();
    });
    // e.preventDefault();
    // this.props.updateUser(this.state).then(() => {
    //   this.props.closeProModal();
    //   this.props.clearErrors();
    // });
  }

  renderErrors() {
    return(
      <ul className='edit-profile-errors'>
        <li>Some fields appear to be incorrect. Please fill them out</li>
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
                  onKeyPress={this.handleKeypress}
                  defaultValue={this.state.first_name}
                  placeholder="Update First name"
                  type="text"
                  onChange={this.updateBody('first_name')}
                 />

                <input
                  onKeyPress={this.handleKeypress}
                  onChange={this.updateBody('last_name')}
                  placeholder="Update Last name"
                  type="text"
                  defaultValue={this.state.last_name}
                  ></input>
            </div>
            <ul className="edit-profile-form-emails">
              <input
                onKeyPress={this.handleKeypress}
                onChange={this.updateBody('email')}
                placeholder="Update Email"
                type="text"
                defaultValue={this.state.email}
                ></input>
              <Textarea
                onKeyPress={this.handleKeypress}
                onChange={this.updateBody('description')}
                placeholder="Update Description"
                type='text'
                defaultValue={this.state.description}
                maxLength="500"
                >
              </Textarea>
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
