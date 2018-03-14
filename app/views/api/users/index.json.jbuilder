@user.each do |user|
  json.set! user.id do
    json.partial! "api/users/user", user: user
    json.friend_ids user.friend_ids
    json.pending_friends user.pending_friend_ids
  end
end
