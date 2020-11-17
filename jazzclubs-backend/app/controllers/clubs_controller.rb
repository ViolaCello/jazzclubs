class ClubsController < ApplicationController

def index
    clubs = Club.all 
    render json: clubs
end


def create
    club = Club.new(club_params)
    if club.save
      render json: club
    else
      render json:{ errors: club.errors.full_messages}
    end
  end

private

def club_params
    params.require(:club).permit(:name, :location, :cover, :website)
  end

end
