import React from 'react';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      receiver_id: this.props.currentUser.id
    };

    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
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

  handleKeypress(e){
    if (e.charCode == 13) {
      this.handleSubmit(e);
    } else {
      this.props.clearErrors();
    }
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

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.match.params.id) {
      const newState = Object.assign({}, this.state, {receiver_id: this.props.match.params.id});
      this.props.createPost(newState).then(() => {
        this.setState({body: ""});
      });
    } else {
      const newState = Object.assign({}, this.state, {receiver_id: this.props.currentUser.id});
      this.props.createPost(newState).then(() => {
        this.setState({body: ""});
      });
    }
  }

  render() {

    return (
      <div className="create-post-form">
        <h4>
          <span>
            <img src={window.pencil}></img>
            { (this.props.match.params.id === undefined) || (parseInt(this.props.match.params.id) === this.props.currentUser.id) ?
              <p>Make Post</p>
                :
              <p>Post on {this.props.users[this.props.match.params.id].first_name + "'" + 's'} Wall</p>
            }
          </span>
        </h4>
        <ul className="create-post-insides">
          <p>
            <img src={this.props.currentUser.image_url}></img>
          </p>
          <form onSubmit={this.handleSubmit}>
            <textarea
              placeholder=  { (this.props.match.params.id === undefined) || (parseInt(this.props.match.params.id) === this.props.currentUser.id) ?
                  "What's on your mind?"
                    :
                  `Post on ${this.props.users[this.props.match.params.id].first_name + "'" + 's'} Wall`
                }
              onChange={this.updateBody}
              onKeyPress={this.handleKeypress}
              value={this.state.body}
              ></textarea>
          </form>
        </ul>
        <ul className='create-post-bottom'>
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
