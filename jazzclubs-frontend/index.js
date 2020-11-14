console.log("testing...")

// test that we can get data from the backend
const BACKEND_URL = 'http://localhost:3000';
fetch(`${BACKEND_URL}/clubs`)
  .then(response => response.json())
  .then(parsedResponse => 
    
    console.log(parsedResponse[0].name, parsedResponse[0].id, parsedResponse[0].location)
 

    );