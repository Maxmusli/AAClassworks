class CreateShortenedUr1 < ActiveRecord::Migration[5.2]
  def change
    create_table :shortened_ur1s do |t|
      t.string :long_url, null: false
      t.string :short_url, null: false
      t.integer :user_id
      t.timestamps
    end

    add_index :shortened_ur1s, :long_url, unique: true
  end
end
