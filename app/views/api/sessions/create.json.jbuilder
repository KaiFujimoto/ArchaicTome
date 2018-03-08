json.set! session
  json.partial! "api/users/session", user: @user
end


json.errors @user.errors.full_messages
