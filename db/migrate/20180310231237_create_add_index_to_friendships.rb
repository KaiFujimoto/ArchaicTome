class CreateAddIndexToFriendships < ActiveRecord::Migration[5.1]
  def change
    add_index :friendships, [:user_id, :friend_id], unique: true
  end
end
