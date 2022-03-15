class Artist < ApplicationRecord
  belongs_to :chart
  has_many :songs, dependent: :destroy
  validates :name, :genre, presence: true

end
