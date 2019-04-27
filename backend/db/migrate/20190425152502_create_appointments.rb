class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.references :user, foreign_key: true
      t.references :specialist, foreign_key: true
      t.references :clinic, foreign_key: true
      t.date :date
      t.time :start_time
      t.time :end_time
      t.boolean :cancelled
      t.string :cancellation_reason

      t.timestamps
    end
  end
end
