import React from 'react';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      imageFile: null,
      imageUrl: null
    };

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateBody(e) {
    this.setState({body: e.target.value});
  }

  // updateFile(e) {
  //   let file = e.currentTarget.files[0];
  //   let fileReader = new FileReader();
  //   fileReader.onloadend = function () {
  //     this.setState({ imageFile: file, imageUrl: fileReader.result }).bind(this);
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }


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

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state).then(() => {
      this.setState({body: ""});
    });
  }

  render() {
    return (
      <div className="create-post-form">
        <h4>
          <span>
            <img src={window.pencil}></img>
            <p>Make Post</p>
          </span>
        </h4>
        <ul className="create-post-insides">
          <p>
            <img src={this.props.currentUser.image_url}></img>
          </p>
          <form onSubmit={this.handleSubmit}>

            <input
              placeholder="What's On Your Mind?"
              onChange={this.updateBody}
              type="textarea"
              value={this.state.body}
              ></input>
          </form>
        </ul>
        <ul>
          {this.props.errors.errors && this.props.errors.errors.length > 0 ? this.renderErrors() : ''}

        </ul>
      </div>
    );
  }
}

export default CreatePost;


// <img src={this.state.imageUrl} />

// <input
//   placeholder="What's On Your Mind?"
//   onChange={this.updateFile}
//   type="file"
//   value={this.state.body}
//   ></input>
