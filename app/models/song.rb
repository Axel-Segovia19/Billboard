class Song < ApplicationRecord
  belongs_to :artist

  validates :title, :run_time, presence: true
end
