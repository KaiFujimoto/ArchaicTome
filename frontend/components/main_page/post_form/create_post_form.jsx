import React from 'react';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  renderErrors() {
    return(
      <ul className='create-post-errors'>
        {this.props.errors.map( (error, idx) => {
          return (
              <li key={idx}>
                {error}
              </li>
          );
        })}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state).then(() => {
      this.setState({body: ""});
    });
  }

  render() {
    return (
      <div className="create-post-form">
        <h4><span>🖋 Make Post</span></h4>
        <ul className="create-post-insides">
          <p>img</p>
          <form onSubmit={this.handleSubmit}>

            <input
              placeholder="What's On Your Mind?"
              onChange={this.updateBody}
              type='text'
              value={this.state.body}
              ></input>

          </form>
        </ul>
        <ul>
          {this.props.errors.length > 0 ? this.renderErrors() : ''}
        </ul>
      </div>
    );
  }
}

export default CreatePost;
