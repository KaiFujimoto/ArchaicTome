module Likeable
  extend ActiveSupport::Concern

  included do
    has_many :likes, as: :likeable
  end

  def receive_like(liker_id)
    self.likes.find_or_create_by(liker_id: liker_id)
  end
end
