# This migration comes from discourse_reports (originally 20150212192210)
class AddParts < ActiveRecord::Migration
  def change
    create_table :discourse_reports_parts do |t|
      t.string :name, null: false, default: ''
      t.string :slug, null: false, default: ''

      t.integer :position, null: false, default: 0
    end

    add_index :discourse_reports_parts, :position
  end
end
