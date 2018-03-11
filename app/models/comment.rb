class Comment < ApplicationRecord
  validates :body, :author, :post, presence: true

  belongs_to :post

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

end
