class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.integer :author_id
      t.integer :receive_id
      t.string :body
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
