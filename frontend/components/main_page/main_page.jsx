import React from 'react';
import { Provider } from 'react-redux';

import NavBarContainer from './nav_bar_container';
import FeedIndex from './feed_index';
import MainPageLeftSidebar from './main_page_left_sidebar';
import { NewsInfo } from './main_page_right_sidebar';

export default class MainPage extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchAllUsers();
      this.props.fetchPosts(this.props.currentUser.id);
      window.scrollTo(0,0);
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
            <MainPageLeftSidebar currentUser={this.props.currentUser}/>
            <ul>
              <FeedIndex posts={this.props.posts} users={this.props.users}/>
            </ul>
            <ul className='main-page-news-feed'>
              <NewsInfo />
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
