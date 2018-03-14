import { acceptFriendRequest, deleteFriendRequest } from '../../actions/friend_actions';
import { connect } from 'react-redux';

import NavbarDropDownMenu from './nav_bar_dropdown_menu';

const mapStateToProps = (state, ownProps) => {
  return ({
    users: ownProps.users,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    acceptFriendRequest: (userId) => dispatch(acceptFriendRequest(userId)),
    deleteFriendRequest: (userId) => dispatch(deleteFriendRequest(userId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDropDownMenu);
