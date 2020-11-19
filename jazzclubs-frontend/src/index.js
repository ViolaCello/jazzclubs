



console.log("Hi Tony - we are loaded in the console")

const api = new ApiService();


const init = () =>{
  renderClubs()
  
}

// DOM identifiers
const leftPage = document.querySelector(".column1")
const rightPage = document.querySelector(".column2")

// function

async function renderClubs(){
  const clubs = await api.getAllClubs()
  for(club of clubs){
    new Club(club)
    // console.log(club.reviews) - I can get the reviews here
  }
  
  rightPage.innerHTML = ""
  rightPage.innerHTML = Club.renderAll()
  selectClubToView()
}


init()

// selectClubToView()

// document.addEventListener("DOMContentLoaded", function(){
   
//     selectClubToView()
// });


// Select Club to Show
//  document.addEventListener("DOMContentLoaded", function(){
//    const clubList = document.querySelector(".column2")
 
//    clubList.addEventListener("click", function(e) {
//      console.log(e.target.id)
//      showClubDetail(e.target.id)
//  })
//  })


// get Form to add a Venue
const createNewVenueButton = document.querySelector(".button1");
let reviewButton;

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
   
    //  let stars = whichRadioButtonWasSelected(rating)
      let venueName = venue.value
      let  venueLocation = nexttime.value
     // let venueComment = comment.value
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
        if (obj_club.errors) {
          throw new Error(obj_club.errors) 
        }else{
       
        // renderClubs()
        addClubtoDOm(ojb_club)
        clearForm()
        }
      })
      .catch(err => alert(err))
    }
  
  function  addClubtoDOm(info) {
    let club_info = 
    `
      <div class="rclub" id=${info.id}>
      <p>${info.name}</p>
      <br>${info.location}</br>
      <br>$ ${info.cover}</br>
      <br><a href=${info.website}  target="_blank">${info.website}</a>
      <br><br>Average Rating: ${this.averageRating()}
  
      </div>
    `
    rightPage.innerHTML += club_info
  }
  
  function clearForm() {
    leftPage.innerHTML = ""
  }
  
  
  const clubList = document.querySelector(".column2")
 function selectClubToView() {
   clubList.addEventListener("click", function(e) {
    // debugger
     if (e.target.className==="rclub") {
     console.log(e.target.id)
     showClubDetail(e.target.id)
     } else if 
     (e.target.parentElement.className==="rclub") {
      showClubDetail(e.target.parentElement.id)
     }
 })
}
 
  
  function showClubDetail(id) {
    let club = getClubDetails(id)
    console.log(club)
    mountToCenterPage(club)
  }
  
function getClubDetails(clubId) {
    console.log(clubId)
    let newId = parseInt(clubId)
    let finder = Club.all
    let found = finder.find(c => c.id === newId)
    console.log(found)
    return found 

}



//   function getClubDetails(id) {
//     fetch(`http://localhost:3000/clubs/${id}`)
//     .then(res => res.json())
//      .then(clubs => 
//        returnClubData = clubs
//      );
//   }
  
  function mountToCenterPage(info) {
    const reviews = info.reviews
    reviewArray = []
    for (review of reviews) {
      reviewArray.push(review)
    }
console.log(reviewArray)
// debugger
    let club_info = 
    `
      <div class="soloclub" id=${info.id}>
      <p>${info.name}</p>
      <br>${info.location}</br>
      <br>$ ${info.cover}</br>
      <br><a href=${info.website}  target="_blank">${info.website}</a>
      <br><br>Average Rating: ${info.averageRating()}
      <br><br>
      <br><br> Reviews:
    <ul>
      ${info.reviews.map(log => `<span> ${log.comments} </span><br>
      <span>Rating: ${log.stars} </span><br>`).join("")}
      </ul>
      <button type="button" id="addreview" class="button3">Add Review</button>
      </div>
      `
      
    leftPage.innerHTML = club_info

    reviewButton.document.querySelector(".button3")  
    reviewButton.addEventListener("click", function(e) {
      e.preventDefault()
      displayCommentForm()
      }
      )
  }


  