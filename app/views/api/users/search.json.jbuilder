json.array! @users do |user|
  json.extract! user, :id, :first_name, :last_name
  json.image_url asset_path(user.avatar.url)
end
