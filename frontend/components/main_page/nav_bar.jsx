import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  render () {
    return (
      <div className="main-page-nav-right-side">
        <ul className="main-page-nav-ul">
          <span>img</span>
          <button>{this.props.currentUser.first_name}</button>
          <ul>
            <button>Home</button>
          </ul>
        </ul>
        <ul className="nav-bar-pics">
          <li className="nav-bar-people">
            <img src={window.people}></img>
          </li>
          <li className="nav-bar-people">
            <img src={window.message}></img>
          </li>
          <li className="nav-bar-people">
            <img src={window.globe}></img>
          </li>
        </ul>
        <ul>
          <li className="nav-bar-main-button">
            <button onClick={() => this.props.logout()}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
