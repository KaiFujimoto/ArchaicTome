# json.partial! "api/users/user", user: @user

#######

json.partial! "api/users/user", user: @user
json.friend_ids @user.friend_ids
json.pending_friends @user.pending_friend_ids
