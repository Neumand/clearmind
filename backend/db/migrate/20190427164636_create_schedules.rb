class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.time :from
      t.time :to

      t.timestamps
    end
  end
end
