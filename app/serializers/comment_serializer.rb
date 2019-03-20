class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content

  belongs_to :haunt
  belongs_to :user
end
