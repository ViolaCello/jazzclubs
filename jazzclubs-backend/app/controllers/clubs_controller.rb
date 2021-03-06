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

  def destroy
    clb = Club.find_by_id(params[:id])
    remove = Review.purge_by_id(clb.id)
    clb.delete
    render json: {id: params[:id]} 
  end

private

def club_params
    params.require(:club).permit(:name, :location, :cover, :website)
  end

  

end
