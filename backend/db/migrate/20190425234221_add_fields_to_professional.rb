class AddFieldsToProfessional < ActiveRecord::Migration[5.2]
  def change
    add_column :professionals, :expertise, :string
    add_column :professionals, :image, :string
  end
end
