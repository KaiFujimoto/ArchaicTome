import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from "react-onclickoutside";

class AutoSuggestSearch extends React.Component {
  constructor() {
    super();
    this.state = {
        searchText: '',
        searchResults: [],
        dropdown: 'closed'
    };
    this.handleChange = this.handleChange.bind(this);
    this.openDropClass = this.openDropClass.bind(this);
    this.closeDropClass = this.closeDropClass.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
  }

  handleClickOutside(e) {
    this.closeDropClass();
  }

  openDropClass() {
    this.setState({dropdown: 'open'});
  }

  closeDropClass() {
    this.setState({dropdown: 'closed'});
  }

  handleChoice(e) {
    this.closeDropClass();
    this.inputSearch.value = "";
  }

  handleChange(e) {
    this.setState({searchText: e.currentTarget.value});
    const newState = Object.assign({}, this.state, {searchText: e.currentTarget.value});
    this.props.userSearch(newState.searchText);
    this.openDropClass();
  }

  render() {
    let { searchResults } = this.props;
    let searchResult;
    if (searchResults instanceof Object) {
      searchResult = Object.values(searchResults);
    } else {
      searchResult = searchResults;
    }
    let searchBar;
    if (this.state.searchText === "") {
      searchBar = (
        <div></div>
      );
    } else if (searchResults.length === 0) {
      searchBar = (
        <div className="nav-search-no-results">No Search Results</div>
      );
    } else {
      searchBar = (
        searchResult.map( user => (
          <div
            key={user.id}
            className="nav-search-results">
            <Link
              onClick={this.handleChoice}
              className="nav-search-user-link"
              to={`/profile/${user.id}`}>
              <button className="nav-search-user-info">
                <img
                  src={user.image_url}
                  alt="user profile thumbnail"/>
                <span>
                  {user.first_name + ' ' + user.last_name}
                </span>
              </button>
            </Link>
          </div>
        )
        )
      );
    }

    return (
        <div className='search-bar'>
          <div className='search-bar-input'>
            <input
                onChange={this.handleChange}
                type="text"
                placeholder="Search"
                ref={el => this.inputSearch = el}
             />
          </div>
          <div className='search-bar-dropdown'>
            <div className={`search-bar-list ${this.state.dropdown}`}>
              { searchBar }
            </div>
          </div>
        </div>
    );
  }

}

export default onClickOutside(AutoSuggestSearch);
