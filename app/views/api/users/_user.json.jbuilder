json.extract! user, :id, :first_name, :last_name, :email, :birth_date, :description

json.image_url asset_path(user.avatar.url)
json.cover_url asset_path(user.cover_photo.url)
