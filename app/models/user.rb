class User < ApplicationRecord
  GENDERS = {
    male: 'M',
    female: 'F'
  }
  validates :email, :first_name, :last_name, :password_digest, :session_token, :gender, :birth_date, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_many :authored_posts,
    class_name: :Post,
    foreign_key: :author_id

  has_many :wall_posts,
    class_name: :Post,
    foreign_key: :receiver_id

  def self.is_male?
    gender == 'M'
  end

  def self.is_female?
    gender = 'F'
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

end
