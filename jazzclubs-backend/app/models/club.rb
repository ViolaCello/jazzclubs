class Club < ApplicationRecord
    has_many :reviews
    validates :homepage, url: { allow_nil: true, allow_blank: true }
end
