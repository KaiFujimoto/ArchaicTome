import React from 'react';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
  }

  updateBody(e) {
    this.setState({body: e.currentTarget.value});
  }

  render() {
    return (
      <div className="create-post-form">
        <h4><span>🖋 Make Post</span></h4>
        <ul className="create-post-insides">
          <p>img</p>
          <form onSubmit={() => this.props.createPost(this.state)}>

            <input
              placeholder="What's On Your Mind?"
              onChange={this.updateBody.bind(this)}
              type='textarea'
              value={this.state.body}
              ></input>

          </form>
        </ul>
      </div>
    );
  }
}

export default CreatePost;
