class Like < ApplicationRecord
  
  validates :liker_id, :liked_id, :liked_type, presence: true
  validates :liker_id, uniqueness: { scope: [:likeable] }
  belongs_to :likeable, polymorphic: true

end
