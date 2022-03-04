class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.integer :peak
      t.string :run_time
      t.string :chart_time
      t.string :title
      t.belongs_to :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
