console.log("testing...")

document.addEventListener("DOMContentLoaded", function(){
  fetch("http://localhost:3000/clubs")
    .then(res => res.json())
     .then(clubs => 
      initalizeClubData(clubs)
     );
});

// test that we can get data from the backend
// const BACKEND_URL = 'http://localhost:3000';
// fetch(`${BACKEND_URL}/clubs`)
//   .then(response => response.json())
//   .then(parsedResponse => 
    
//     console.log(parsedResponse[0].name, parsedResponse[0].id, parsedResponse[0].location)
//     );

// set DOM identifiers
const leftPage = document.querySelector(".column1")
const rightPage = document.querySelector(".column2")




function initalizeClubData(clubs) {
  for (club of clubs) {
    renderClubs(club)
  }
}





// get Form to add a Venue
const createNewVenueButton = document.querySelector(".button1");

createNewVenueButton.addEventListener("click", function(e) {
  e.preventDefault()
  toDisplayForm()
  }
  )


    const displayForm = `
      <form id="createvenue" action="#" data-action="create">
        <div class="input-field">
        <label for="venue">Venue Name</label>
          <textarea name="venue" id="venue"></textarea>
         
          
        </div>

        <div class="input-field">
        <label for="nexttime">Neighborhood</label>
          <textarea name="nexttime" id="nexttime"></textarea>
         
        </div>

        <div class="input-field">
        <label for="cover">Average Cover Charge $</label>
        <input type="number" name="cover" id="cover" min="0" max="300" step="5" value="25">
        
      </div>

      <div class="input-field">
      <label for="website">Club website: </label>
      <input type="url" name="website" id="website">
      
    </div>

        <div class="input-field">
        <label for="comment">Comment </label>
        <input type="text" name="comment" id="comment">
        
        </div>

        <div class="input-field">Rating (5 = best)
        <label for="rating"><input type="radio" id="rating" name="rating" value="1" />1</label>
        <label><input type="radio" id="rating" name="rating" value="2"/>2</label>
        <label><input type="radio"  id="rating" name="rating" value="3" />3</label>
        <label><input type="radio" id="rating" name="rating" value="4" />4</label>
        <label><input type="radio" id="rating" name="rating" value="5" />5</label>
        

        </div>

        <input id="submit" type="submit" value="Create Venue" class="button2">
      </form>
    </div>
`

function toDisplayForm() {
  
  leftPage.innerHTML = displayForm 

  const createVenueFormButton = document.querySelector("#submit");
  createVenueFormButton.addEventListener("click", function(e) {
  e.preventDefault()
  let formData = {}
 
    let stars = whichRadioButtonWasSelected(rating)
    let venueName = venue.value
    let  venueLocation = nexttime.value
    let venueComment = comment.value
    let venueCover = cover.value
    let venueWebsite = website.value
   Object.assign(formData, {name:venueName}, {location:venueLocation}, {cover:venueCover}, {website:venueWebsite})
   console.log(formData)
   sendFormInfo(formData)
}
  )
}
 

function whichRadioButtonWasSelected(rating) {
  for(i = 0; i < rating.length; i++) { 
    if(rating[i].checked) 
   // console.log(rating[i].value)
   return rating[i].value
}
}


// Post Form info to database
function sendFormInfo(formData) {
let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/clubs", configObj)
  .then(res => res.json())
    .then((obj_club) => {
      let new_club = renderClubs(obj_club)
      
      clearForm()
    })
  }

function renderClubs(info) {
  let club_info = 
  `
    <div class="rclub" id=${info.id}>
    <p>${info.name}</p>
    <p>${info.location}</p>
    <p>${info.cover}</p>
    <p>${info.website}</p>
    
    </div>
  `
  rightPage.innerHTML += club_info
}

function clearForm() {
  leftPage.innerHTML = ""
}
