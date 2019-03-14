class HauntSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description
  has_many :comments
  has_many :users, through: :comments
end
