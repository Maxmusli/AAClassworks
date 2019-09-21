class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :user_name, null: false
      t.string :email, null: false

      
    end

    add_index :users, :user_name, unique: true
    add_index :users, :email, unique: true
    add_index :users, [:email, :user_name], unique: true
  end
end
