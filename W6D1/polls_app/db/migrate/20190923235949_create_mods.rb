class CreateMods < ActiveRecord::Migration[5.2]
  def change
    create_table :mods do |t|
      t.username :string
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
