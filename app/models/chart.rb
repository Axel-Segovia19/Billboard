class Chart < ApplicationRecord

  validates :artist, :song, presence: true
  has_many :artists, :songs dependent: :destroy
end
