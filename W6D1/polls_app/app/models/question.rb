# == Schema Information
#
# Table name: questions
#
#  id      :bigint           not null, primary key
#  poll_id :integer
#  text    :string           not null
#

class Question < ApplicationRecord
  validates :text, presence: true

  has_many :answer_choices,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :AnswerChoice

  belongs_to :poll,
    primary_key: :id,
    foreign_key: :poll_id,
    class_name: :Poll
end
