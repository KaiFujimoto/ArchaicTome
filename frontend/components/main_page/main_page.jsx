import React from 'react';
import { Provider } from 'react-redux';

import NavBarContainer from './nav_bar_container';
import FeedIndex from './feed_index';

export default class MainPage extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchAllUsers();
      this.props.fetchPosts(this.props.currentUser.id);
    }

    render() {
      if (this.props.posts === undefined) {
        return null;
      }

      if (this.props.users === undefined) {
        return null;
      }
      return (
        <div className="main-page">
          <ul className='main-page-body'>
            <ul className='main-page-left-menu'>
              Placeholder
            </ul>
            <ul>
              <FeedIndex posts={this.props.posts} users={this.props.users}/>
            </ul>
            <ul className='main-page-news-feed'>
              Placeholder
            </ul>
          </ul>
        </div>
      );
    }
}

//
// const mapStateToProps = (state) => {
//
// };
//
// const mapDispatchToProps = dispatch => {
//   return ({
//
//   });
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
