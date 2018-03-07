class FixingMispelling < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :receive_id

    add_column :posts, :receiver_id, :integer
  end
end
