class ReviewsController < ApplicationController

    

    def create
        review = Review.new(review_params)
        if review.save
          render json: review
        else
          render json:{ errors: review.errors.full_messages}
        end
      end

      
        def update
          review = Review.find_by(id: params[:id])
          if review.update(review_params)
            render json: review
          else
            render json:{ errors: review.errors.full_messages}
          end
      end
    
   

private

      def review_params
        params.require(:review).permit(:stars, :comments, :club_id, :id)
      end

end
