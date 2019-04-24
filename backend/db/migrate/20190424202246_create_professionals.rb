class CreateProfessionals < ActiveRecord::Migration[5.2]
  def change
    create_table :professionals do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone_number

      t.timestamps
    end
  end
end
