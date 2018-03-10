json.extract! user, :id, :first_name, :last_name, :email, :birth_date, :gender, :description, :profile_picture_url, :cover_picture_url

json.image_url asset_path(user.avatar.url)
json.cover_url asset_path(user.cover_photo.url)
