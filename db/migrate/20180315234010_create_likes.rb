class CreateLikes < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :liker_id
      t.integer :liked_id
      t.string :liked_type
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
