class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.string :session_token
      t.date :birth_date
      t.string :gender
      t.string :location
      t.string :description
      t.string :profile_picture_url
      t.string :cover_picture_url
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
