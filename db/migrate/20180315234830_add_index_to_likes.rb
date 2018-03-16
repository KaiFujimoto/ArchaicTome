class AddIndexToLikes < ActiveRecord::Migration[5.1]
  def change
    add_index :likes, [:liker_id, :liked_id, :liked_type], unique: true
    add_index :likes, [:liked_id, :liked_type]
  end
end
