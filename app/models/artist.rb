class Artist < ApplicationRecord
  belongs_to :chart

  validates :name, :genre, presence: true
  has_many :songs, dependent: :destroy
end
