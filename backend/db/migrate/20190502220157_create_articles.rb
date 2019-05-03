class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :description
      t.string :thumbnail
      t.string :url
      t.string :category

      t.timestamps
    end
  end
end
