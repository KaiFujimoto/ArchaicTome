import * as FriendApiUtil from '../util/friends_api_util';

export const RECEIVE_ALL_PENDING_FRIENDS = 'RECEIVE_ALL_PENDING_FRIENDS';
export const RECEIVE_FRIEND_REQUEST = 'RECEIVE_FRIEND_REQUEST';
export const REMOVE_FRIEND_REQUEST = 'DELETE_FRIEND_REQUEST';
export const RECEIVE_NEW_FRIEND = 'RECEIVE_NEW_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

//
// export const receiveAllPendingFriends = (friends) => {
//   return ({
//     type: RECEIVE_ALL_PENDING_FRIENDS,
//     friends
//   });
// };

export const receiveNewFriend = (payload) => {
  return ({
    type: RECEIVE_NEW_FRIEND,
    payload
  });
};

export const receiveFriendRequest = (payload) => {
  return ({
    type: RECEIVE_FRIEND_REQUEST,
    payload
  });
};

export const removeFriendRequest = (payload) => {
  return ({
    type: REMOVE_FRIEND_REQUEST,
    payload
  });
};

export const removeFriend = (payload) => {
  return ({
    type: REMOVE_FRIEND,
    payload
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
    return FriendApiUtil.sendFriendRequest(userId).then( payload => {
      dispatch(receiveFriendRequest(payload));
    });
  };
};

export const acceptFriendRequest = (userId) => {
  return dispatch => {
    return FriendApiUtil.acceptFriendRequest(userId).then( payload => {

      return dispatch(removeFriendRequest(payload));
    }).then((payload) => {

      return dispatch(receiveNewFriend(payload));
    });
  };
};

export const deleteFriend = (userId) => {
  return dispatch => {
    return FriendApiUtil.deleteFriendRequest(userId).then( payload => {
      dispatch(removeFriend(payload));
    });
  };
};

export const deleteFriendRequest = (userId) => {
  return dispatch => {
    return FriendApiUtil.deleteFriendRequest(userId).then( payload => {
      dispatch(removeFriendRequest(payload));
    });
  };
};
