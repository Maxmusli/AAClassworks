# == Schema Information
#
# Table name: polls
#
#  id      :bigint           not null, primary key
#  user_id :integer
#  title   :string           not null
#

class Poll < ApplicationRecord
  validates :title, presence: true, uniqueness: true

  has_many :questions,
    primary_key: :id,
    foreign_key: :poll_id,
    class_name: :Question

  belongs_to :author,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
