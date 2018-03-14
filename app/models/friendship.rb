class Friendship < ApplicationRecord
  STATUS_STATES = %w(APPROVED PENDING).freeze
  after_initialize :assign_pending_status

  validates :status, inclusion: STATUS_STATES
  validates :user_id, :friend_id, :status, presence: true
  validates :user_id, uniqueness: { scope: :friend_id }
  validate :cannot_friend_yourself, on: :create
  validate :check_friendship_exists, on: :create

  belongs_to :requester,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :receiver,
    foreign_key: :friend_id,
    class_name: :User

  def approved?
    self.status == 'APPROVED'
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

  def check_friendship_exists
    if !(Friendship.all.where("friend_id = '#{self.user_id}'").empty?)
      errors[:user_id] << 'this person already friended you! check your notifications!'
    end
  end

end
