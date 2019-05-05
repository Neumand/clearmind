class AddTitleToSpecialists < ActiveRecord::Migration[5.2]
  def change
    add_column :specialists, :title, :string
  end
end
