@user.each do |user|
  json.set! user.id do
    json.partial! "api/users/user", user: user
    json.friends user.friends
  end
end
