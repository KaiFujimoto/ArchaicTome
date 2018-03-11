import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Textarea from 'react-expanding-textarea';

class EditComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleKeypress(e){
    if (e.charCode == 13) {
      this.handleSubmit(e);
    }
  }

  updateField(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleSubmit(e) {
    this.props.action(this.state).then(() => {
      this.props.closeEditModal();
    });
  }

  render() {

    return (
      <div className='comment'>
        <div className='comment-profile-icon'>
          <img src={this.props.currentUser.image_url}></img>
        </div>
        <form onSubmit={this.handleSubmit}
          className='inner-comment'>
          <Textarea
            onKeyPress={this.handleKeypress}
            placeholder="Write a comment..."
            onChange={this.updateField.bind(this)}
            value={this.state.body}
            maxLength="3000"/>
        </form>
      </div>
    );
  }

}

export default EditComment;
