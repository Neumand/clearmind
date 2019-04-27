class AddFieldsToSpecialist < ActiveRecord::Migration[5.2]
  def change
    add_column :specialists, :expertise, :string
    add_column :specialists, :image, :string
  end
end
