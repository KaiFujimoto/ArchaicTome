class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :author_id
      t.integer :post_id
      t.integer :parent_comment_id
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
