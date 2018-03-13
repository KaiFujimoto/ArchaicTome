import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
  }

  handleClick() {

  }

  render () {
    return (
      <nav className="main-page-nav">
          <h1>
            <button>
              <Link to='/feed'>a</Link>
            </button>
          </h1>
          <ul>
            Placeholder for Searchbar
            🔍
          </ul>
        <div className="main-page-nav-right-side">
          <ul className="main-page-nav-ul">
            <Link to={`/profile/${this.props.currentUser.id}`}>
              <button className="main-page-nav-ul-button">
                <span className="main-page-nav-ul-span">
                  <img src={this.props.currentUser.image_url}></img>
                </span>
                {this.props.currentUser.first_name}
              </button>
            </Link>
            <ul className="main-page-nav-ul-home">
              <button className="main-page-nav-ul-button-home">
                <Link to='/feed'>Home</Link>
              </button>
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
      </nav>
    );
  }
}

export default NavBar;
