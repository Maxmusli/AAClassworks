class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name, null: false
      t.integer :prereq_id
      t.integer :instructor_id
      
      t.timestamps
    end

    add_index :courses, :name, unique: true
    add_index :courses, [:instructor_id, :prereq_id], unique: true
  end
end
