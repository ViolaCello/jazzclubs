
This is a Jazz Club Reviewer which uses a Rails API backend with a JavaScript-based frontend.

The purpose of this app is to provide a listing of jazz clubs, their location and website (if any), the approximate cover charge, and a user-generated rating so that people interested in seeing live jazz (once this COVID ends and we get live jazz back), people may have an idea of where they may want to go that evening.


* Info regarding the database and initalization:
This appication uses the postresql database in Rails.  To initialize, on my system, anyway, it need to type:
sudo service postgresql restart
then,
rails db:create

Seed data has been provided to start you off.  Type:
rails db:seed

Once you get it forked and cloned onto your system, it should begin to run once you 
rails s

and then open the index.html file from the frontend using the Chrome Browser.



* 
There are two models in the database:
  Clubs in which there is a :has_many relation ship with Reviews (where the Reviews :belongs_to the Club).
  
 All interactions between the client and the server are handled asynchronously (AJAX) and use JSON as the communication format.
  -- There are four (5) AJAX calls to the backend database using fetch()
    1) The first of these is handled upon loading.  There is a GET request to the ClubsController Index route which returns, in JSON format, all of the Club.all information AND nested within this, is also the Reviews which belong to each Club.
    2) There is a POST request to the ClubsController Create route which instantiates a new Club into the database on the backend, which, once the information is returned, a new instance of the Club Object is created in the Club Class in JavaScript to keep the user experience flowing and as to not have to send another fetch() GET request to the database
    3) There is a POST request to the ReviewsController Create route which instantiates a new Review once a user submits a comments form.  The club_id is taken from the information on the DOM and sent to the database with the appropriate club_id for proper identification.  It is then added to the pre-existing Club Object in the JavaScript Club class
    4) There is a PATCH request to the ReviewsController so that the user can edit a comment and/or rating
    5) There is a DELETE request to the ClubsController to delete a specific club.  Before actually deleting the Club, it goes to the Reviews model to delete all Reviews that are associated with the Club first, then deletes the club.
    
 The JavaScript application uses Object Oriented JavaScript (classes) to encapsulate related data and behavior.
    This includes constructing a new instance of Club upon rendering the Clubs already in the database, as well as when a user creates one in real-time
    There are static methods (such as the renerAll() upon loading/initalizing) as well as class instance methods like averageRating() which calculates the average star ratings that a particular Club has stored in the database.
    
    
  