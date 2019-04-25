class CreateClinics < ActiveRecord::Migration[5.2]
  def change
    create_table :clinics do |t|
      t.string :name
      t.string :address
      t.string :phone_number
      t.string :description

      t.timestamps
    end
  end
end
