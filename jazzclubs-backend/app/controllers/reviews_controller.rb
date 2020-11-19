class ReviewsController < ApplicationController


    def create
        review = Review.new(review_params)
        if review.save
          render json: review
        else
          render json:{ errors: review.errors.full_messages}
        end
      end

private

      def club_params
        params.require(:review).permit(:stars, :comments, :club_id)
      end

end
