class ChangePhoneNumberTypeInClinics < ActiveRecord::Migration[5.2]
  def change
    change_column :clinics, :phone_number, :string
  end
end
