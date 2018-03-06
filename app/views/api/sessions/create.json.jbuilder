json.set! session
  json.partial! "api/users/user", user: @user
end

json.set! errors
  json.errors @user.errors
end
