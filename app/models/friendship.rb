class Friendship < ApplicationRecord
  validates :requester, :receiver, :status, presence: true

  belongs_to :requester,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :receiver,
    foreign_key: :friend_id,
    class_name: :User

end
