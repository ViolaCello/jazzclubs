console.log("testing...")

// test that we can get data from the backend
const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/clubs`)
  .then(response => response.json())
  .then(parsedResponse => 
    
    console.log(parsedResponse[0].name, parsedResponse[0].id, parsedResponse[0].location)
    );



    const displayForm = `
      <form id="createvenue" action="#" data-action="create">
        <div class="input-field">
          <input type="text" name="venue" id="venue">
          <label for="venue">Venue Name</label>
        </div>

        <div class="input-field">
          <input type="text" name="location" id="location">
          <label for="location">Neighborhood</label>
        </div>

        <div class="input-field">
        <input type="integer" name="rating" id="rating">
        <label for="content">Rating (5 = best) </label>
        <div class="input-field">
        </div>

        <input id="submit" type="submit" value="Create Venue" class="btn">
      </form>
    </div>
`
