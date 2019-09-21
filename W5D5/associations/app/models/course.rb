# == Schema Information
#
# Table name: courses
#
#  id            :bigint           not null, primary key
#  name          :string
#  prereq_id     :integer
#  instructor_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Course < ApplicationRecord
  validates :name, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :instructor_id,
    class_name: :User

  has_many :enrolled_student,
    through: :enrollment,
    source: :user

  has_many :enrollments,
    through: :user,
    source: :enrollment

  belongs_to :prerequisite,
    primary_key: :id,
    foreign_key: :prereq_id,
    class_name: :Course

  has_many :course_taken,
    through: :prerequisite,
    source: :user
end
