class CreateQuestion < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :poll_id
      t.string :text, null: false
    end
  end
end
