class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :club, null: false, foreign_key: true
      t.integer :stars
      t.string :comments

      t.timestamps
    end
  end
end
