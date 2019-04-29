class CreateAppointments < ActiveRecord::Migration[5.2]
  def change
    create_table :appointments do |t|
      t.references :user, foreign_key: true
      t.references :specialist, foreign_key: true
      t.references :clinic, foreign_key: true
      t.datetime :date_time
      t.datetime :end_time
      t.string :session_details
      t.boolean :cancelled
      t.string :cancellation_reason

      t.timestamps
    end
  end
end
