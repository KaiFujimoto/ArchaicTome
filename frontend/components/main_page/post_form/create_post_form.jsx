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
    debugger
    return (
      <div>
        <form onSubmit={() => this.props.createPost(this.state)}>

          <input
            onChange={this.updateBody.bind(this)}
            type='textarea'
            value={this.state.body}
            ></input>
        </form>
      </div>
    );
  }
}

export default CreatePost;
