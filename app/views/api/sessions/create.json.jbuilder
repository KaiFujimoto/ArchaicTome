json.set! session
  json.partial! "api/users/session", user: @user
end

json.set! errors
  json.errors @user.errors
end
