class Item < ApplicationRecord
  belongs_to :category
  belongs_to :brand
  belongs_to :solder, class_name: "User"
  belongs_to :buyer, class_name: "User"
  has_many :images
end
