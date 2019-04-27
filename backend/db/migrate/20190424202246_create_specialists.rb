class CreateSpecialists < ActiveRecord::Migration[5.2]
  def change
    create_table :specialists do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.references :clinic, foreign_key: true
    
      t.timestamps
    end
  end
end
