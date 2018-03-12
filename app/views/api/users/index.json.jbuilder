@user.each do |user|
  json.set! user.id do
    json.partial! "api/users/user", user: user
  end
end

json.friends do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.partial! '/api/friendships/friendship'
    end
  end
end
