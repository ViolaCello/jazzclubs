class Review < ApplicationRecord
  belongs_to :club
  validates :stars, presence: true
end
