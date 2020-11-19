class ClubsController < ApplicationController
 


def index
    clubs = Club.all 
    render json: clubs, include: [:reviews],  except: [:created_at, :updated_at]
end


def create
    club = Club.new(club_params)
    if club.save
      render json: club
    else
      render json:{ errors: club.errors.full_messages}
    end
  end

  # def show
  #   club = Club.find_by_id(params[:id])
  #   if club
  #   render json: club, except:  [:created_at, :updated_at], include: [:reviews]
  #   else  
  #       render json: { errors: 'Club not found.' }
  #   end
  # end

private

def club_params
    params.require(:club).permit(:name, :location, :cover, :website)
  end

  

end
