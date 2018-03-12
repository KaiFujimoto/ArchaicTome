class Friendship < ApplicationRecord
  STATUS_STATES = %w(APPROVED DENIED PENDING).freeze
  after_initialize :assign_pending_status

  validates :status, inclusion: STATUS_STATES
  validates :user_id, :friend_id, :status, presence: true
  validates :user_id, uniqueness: { scope: :friend_id }
  validate :cannot_friend_yourself, on: :create

  belongs_to :requester,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :receiver,
    foreign_key: :friend_id,
    class_name: :User

  def approved?
    self.status == 'APPROVED'
  end

  def denied?
    self.status == 'DENIED'
  end

  def deny!
    self.status = 'DENIED'
    self.save!
  end

  def pending?
    self.status == 'PENDING'
  end

  private

  def assign_pending_status
    self.status ||= 'PENDING'
  end

  def cannot_friend_yourself
    if self.user_id == self.friend_id
      errors[:user_id] << 'you cannot friend yourself lonely human'
    end
  end

end
