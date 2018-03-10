import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  handleKeypress(e){
    if (e.charCode == 13) {
      this.handleSubmit(e);
    }
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePost(this.state).then(() => {
      this.props.closeModal();
      this.props.clearErrors();
    });
  }

  renderErrors() {
    return(
      <ul className='create-post-errors'>
        {this.props.errors.errors.map( (error, idx) => {
          return (
              <li key={idx}>
                {error}
              </li>
          );
        })}
      </ul>
    );
  }

  render() {

    return (
      <div className="edit-post-form">
        <h4>
          <p>Edit Post</p>
          <button onClick={this.props.closeModal} className="close-x" value='x'>x</button>
        </h4>
        <ul className="edit-post-insides">
          <p>
            <img src={this.props.currentUser.image_url}></img>
          </p>
          <form onSubmit={this.handleSubmit}>
            <textarea
              placeholder="What's on your mind?"
              onChange={this.updateBody}
              onKeyPress={this.handleKeypress}
              value={this.state.body}
              ></textarea>
          </form>
        </ul>
        <ul className='edit-post-bottom'>
          {this.props.errors.errors && this.props.errors.errors.length > 0 ? this.renderErrors() : ''}
        </ul>
        <ul className='buttons-ul'>
          <button
            className='button-to-save-edit' onClick={this.handleSubmit}>Save</button>
        </ul>
      </div>
    );
  }

}

export default EditPost;
