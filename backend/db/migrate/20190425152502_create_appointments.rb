class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.references :user, foreign_key: true
      t.references :professional, foreign_key: true
      t.references :clinic, foreign_key: true
      t.date :date
      t.time :time
      t.string :user_comments
      t.string :professional_comments

      t.timestamps
    end
  end
end
