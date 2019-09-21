# == Schema Information
#
# Table name: shortened_ur1s
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string           not null
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# require 'securerandom'

class ShortenedUr1 < ApplicationRecord
  validates :long_url, :short_url, presence: true

  def self.random_code
    random = ''
    while !shortened_ur1s.exists?(random)
      random = SecureRandom::urlsafe_base64(16)
    end
    random
  end

  def factory(user, long_url)
    long_url = ShortenedUr1.random_code
  end

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :submitted_url,
    primary_key: :id,
    foreign_key: :long_url,
    class_name: :ShortenedUr1
end
