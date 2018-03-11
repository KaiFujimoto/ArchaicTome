import React from 'react';

class PostDropdownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drop: "closed",
      post: this.props.post
    };
    this.toggleDropClass = this.toggleDropClass.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  toggleDropClass(e) {
      if (this.state.drop === "closed") {
        return this.setState({drop: "open"});
      } else {
        return this.setState({drop: "closed"});
      }
  }

  handleEdit(e) {
    e.stopPropagation();
    this.setState({drop: "closed"});
    this.props.openModal({type: 'edit', postId: this.state.post.id});
  }

  handleDelete(e) {
    e.stopPropagation();

    // make a modal later to ask if the user is sure
    this.props.deletePost(this.state.post.id);
  }

  render() {
    return (
      <div>
        <div className="dropdown">
          <button onClick={this.toggleDropClass} className='dropdown-button'>...</button>
          <div className={`dropdown-screen ${this.state.drop === 'closed' ? 'closed' : ''}`} onClick={this.toggleDropClass} />
          <div className={`dropdown-content ${this.state.drop}`}>
            <a onClick={this.handleEdit}>Edit</a>
            <a onClick={this.handleDelete}>Delete</a>
          </div>
        </div>
      </div>

    );
  }
}

export default PostDropdownMenu;
