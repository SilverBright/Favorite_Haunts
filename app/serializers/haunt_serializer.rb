class HauntSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :description
  has_many :comments
end
