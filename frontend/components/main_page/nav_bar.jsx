import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render () {
    debugger
    return (
      <div>
        <ul>
          <span>img</span>
          <button>{this.props.currentUser.first_name}</button>
        </ul>
      </div>
    );
  }
}

export default NavBar;
