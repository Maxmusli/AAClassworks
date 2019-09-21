# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  user_name  :string           not null
#  email      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord
  validates :user_name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  has_many :shortened_url,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ShortenedUr1
end
