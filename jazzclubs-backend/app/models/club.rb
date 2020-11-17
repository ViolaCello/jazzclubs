class Club < ApplicationRecord
    has_many :reviews
    validates :website, url: { allow_nil: true, allow_blank: true }
    validates :name, presence: true
    validates :location, presence: true

end
