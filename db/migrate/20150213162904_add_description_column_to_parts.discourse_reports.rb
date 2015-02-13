# This migration comes from discourse_reports (originally 20150213163410)
class AddDescriptionColumnToParts < ActiveRecord::Migration
  def change
    add_column :discourse_reports_parts, :description, :text, null: false, default: ''
  end
end
