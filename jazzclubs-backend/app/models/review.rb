class Review < ApplicationRecord
  belongs_to :club
  validates :stars, presence: true



  def self.purge_by_id(club) # removes all reviews before actually deleting Club
    rev = Review.all
    rev.map do |i|
        if i.club_id == club
         i.delete
        end
    end
end

end
