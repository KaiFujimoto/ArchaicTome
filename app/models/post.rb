class Post < ApplicationRecord
  validates :author, :body, :receiver, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :receiver,
    class_name: :User,
    foreign_key: :receiver_id

  has_many :comments

end
