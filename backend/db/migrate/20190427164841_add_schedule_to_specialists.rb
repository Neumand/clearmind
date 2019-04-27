class AddScheduleToSpecialists < ActiveRecord::Migration[5.2]
  def change
    add_reference :specialists, :schedule, foreign_key: true
  end
end
