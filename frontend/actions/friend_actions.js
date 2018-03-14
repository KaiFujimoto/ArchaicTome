import * as FriendApiUtil from '../util/friends_api_util';

export const RECEIVE_ALL_PENDING_FRIENDS = 'RECEIVE_ALL_PENDING_FRIENDS';
export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'DELETE_FRIEND_REQUEST';

//
// export const receiveAllPendingFriends = (friends) => {
//   return ({
//     type: RECEIVE_ALL_PENDING_FRIENDS,
//     friends
//   });
// };

export const receiveFriendRequest = (friend) => {
  return ({
    type: RECEIVE_FRIEND_REQUEST,
    friend
  });
};

export const removeFriendRequest = (friend) => {
  return ({
    type: REMOVE_FRIEND_REQUEST,
    friend
  });
};
//
// export const fetchPendingFriendships = (userId) => {
//   return dispatch => {
//     return FriendApiUtil.fetchPendingFriendships(userId).then( friendIds => {
//       dispatch(receiveAllPendingFriends(friendIds));
//     });
//   };
// };

export const sendFriendRequest = (userId) => {
  return dispatch => {
    return FriendApiUtil.sendFriendRequest(userId).then( friend => {
      dispatch(receiveFriendRequest(friend));
    });
  };
};

export const acceptFriendRequest = (userId) => {
  return dispatch => {
    return FriendApiUtil.acceptFriendRequest(userId).then( friend => {
      dispatch(removeFriendRequest(friend));
    });
  };
};

export const deleteFriendRequest = (userId) => {
  return dispatch => {
    return FriendApiUtil.deleteFriendRequest(userId).then( friend => {
      dispatch(removeFriendRequest(friend));
    });
  };
};
