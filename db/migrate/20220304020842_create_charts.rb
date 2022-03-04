class CreateCharts < ActiveRecord::Migration[7.0]
  def change
    create_table :charts do |t|
      t.integer :position
      t.boolean :award
      t.string :name

      t.timestamps
    end
  end
end
