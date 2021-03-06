import React from 'react';

class EditCoverPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: null,
      imageUrl: null,
      clickable: 'not'
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append(`user[${this.props.type}]`, this.state.imageFile);
    this.props.updateUser(formData).then(() => {
      this.props.closeProModal();
    });
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result, clickable: 'yes' });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className="upload-cover-photo">
        <h2>Upload Your Awesome Photo</h2>
        <img src={this.state.imageUrl}></img>
        <div className="upload-button-and-input">
          <input
            type='file'
            onChange={this.updateFile}
            ></input>
          { this.state.clickable === 'not' ?
            <button>
              Select A File First
            </button>
            :
            <button onClick={this.handleSubmit}>
              Update Your Photo
            </button>
          }
        </div>
      </div>
    );
  }
}

export default EditCoverPhoto;
