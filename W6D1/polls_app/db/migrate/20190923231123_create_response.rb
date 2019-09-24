class CreateResponse < ActiveRecord::Migration[5.2]
  def change
    create_table :responses do |t|
      t.integer :answer_choice_id
      t.integer :user_id
    end
  end
end
