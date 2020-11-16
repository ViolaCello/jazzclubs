console.log("testing...")

// test that we can get data from the backend
// const BACKEND_URL = 'http://localhost:3000';
// fetch(`${BACKEND_URL}/clubs`)
//   .then(response => response.json())
//   .then(parsedResponse => 
    
//     console.log(parsedResponse[0].name, parsedResponse[0].id, parsedResponse[0].location)
//     );



    const displayForm = `
      <form id="createvenue" action="#" data-action="create">
        <div class="input-field">
          <input type="text" name="venue" id="venue">
          <label for="venue">Venue Name</label>
        </div>

        <div class="input-field">
          <input type="text" name="nexttime" id="nexttime">
          <label for="nexttime">Neighborhood</label>
        </div>

        <div class="input-field">
        <input type="integer" name="rating" id="rating">
        <label for="rating">Rating (5 = best) </label>
        
        </div>

        <input id="submit" type="submit" value="Create Venue" class="button2">
      </form>
    </div>
`

function toDisplayForm() {
  let loc = document.querySelector(".column1")
  loc.innerHTML = displayForm

  const createVenueFormButton = document.querySelector("#submit");

createVenueFormButton.addEventListener("click", function(e) {
  e.preventDefault()
  console.log(venue.value, nexttime.value, rating.value)
  
  }
  )
}


// get Form to add a Venue
const createNewVenueButton = document.querySelector(".button1");

createNewVenueButton.addEventListener("click", function(e) {
  e.preventDefault()
  toDisplayForm()
  }
  )

// const createVenueFormButton = document.querySelector("#submit");

// createVenueFormButton.addEventListener("click", function(e) {
//   e.preventDefault()
//   console.log(e)
//   }
//   )