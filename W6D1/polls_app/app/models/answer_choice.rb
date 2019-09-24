# == Schema Information
#
# Table name: answer_choices
#
#  id          :bigint           not null, primary key
#  question_id :integer
#  text        :string
#

class AnswerChoice < ApplicationRecord
  validates :text, presence: true

  has_many :responses,
    primary_key: :id,
    foreign_key: :answer_choice_id,
    class_name: :Response

  belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question
end
