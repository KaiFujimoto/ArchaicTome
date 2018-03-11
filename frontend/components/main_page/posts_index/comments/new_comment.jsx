import React from 'react';
import Textarea from 'react-expanding-textarea'

class CommentForm extends React.Component {
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
      this.setState({ body: '' });
    });
  }

  render() {
    return (
      <div className='comment'>
        <div className='comment-profile-icon'>
          <img src={this.props.author.image_url}></img>
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

export default CommentForm;
