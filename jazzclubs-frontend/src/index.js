console.log("We're on!")

const api = new ApiService();


const init = () =>{
  renderClubs()
}

// DOM identifiers
const leftPage = document.querySelector(".column1")
const rightPage = document.querySelector(".column2")

const clearForm = () => {
  leftPage.innerHTML =  `<img src="jazzclubflorence.jpg">`
}


// add list of all clubs onto the page upon receiving the info from the database
async function renderClubs(){
  Club.all = []
  Review.all = []
  const clubs = await api.getAllClubs()
  for(club of clubs){
    new Club(club)
      for (review of club.reviews){
         new Review(review)}
  }
  rightPage.innerHTML = Club.renderAll()
  selectClubToView()
  clearForm()
}


init()

    //  once Clubs have been rendered, addEventListener to them
 function selectClubToView() {
   rightPage.addEventListener("click", function(e) {
     if (e.target.className==="rclub") {
     showClubDetail(e.target.id)
     } else if 
     (e.target.parentElement.className==="rclub") {
      showClubDetail(e.target.parentElement.id)
     }
 })
}

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
   
      let venueName = venue.value
      let  venueLocation = nexttime.value
      let venueCover = cover.value
      let venueWebsite = website.value
     Object.assign(formData, {name:venueName}, {location:venueLocation}, {cover:venueCover}, {website:venueWebsite})
     postVenue(formData)
  }
    )
  }
   
  async function postVenue(formData) {
    let postResponse = await api.postVenue(formData)
    if (postResponse.errors) {
    alert(postResponse.errors) }
    else {
      addClubtoDOm(postResponse)
      clearForm()
    }
  }
  
  
  function addClubtoDOm(info) {
    let newClub = new Club(info)
    let club_info = 
    `
      <div class="rclub" id=${info.id}>
      <p>${info.name}</p>
      <br><br>Average Rating: ${newClub.averageRating()}
  
      </div>
    `
    rightPage.innerHTML += club_info
  }
  

   
 const showClubDetail = (id) => {
    let club = getClubDetails(id)
    mountToCenterPage(club)
  }
  
const getClubDetails = clubId =>  Club.findClubById(parseInt(clubId))
      
function addReviewButton() {
    reviewButton = document.querySelector(".button3")  
    reviewButton.addEventListener("click", function(e) {
      e.preventDefault()
      removeAddReviewButton()
      displayCommentForm()
      }
      )
  }


const commentForm = 
`
    <form id="createreview" action="#" data-action="create">
        <div class="input-field">
        <label for="comment">Comment </label>
        <textarea name="comment" id="comment"></textarea>
        
        </div>

        <div class="input-field">Rating (5 = best)
        <label for="rating"><input type="radio" id="rating" name="rating"  value="1"  />1</label>
        <label><input type="radio" id="rating" name="rating" value="2"  />2</label>
        <label><input type="radio" id="rating"  name="rating" value="3" />3</label>
        <label><input type="radio" id="rating" name="rating" value="4"/>4</label>
        <label><input type="radio" id="rating" name="rating" value="5" />5</label>
        
        <input id="speak" type="submit" value="Be Heard" class="button2">

        </div>


`
function whichRadioButtonWasSelected(rating) {
  for(i = 0; i < rating.length; i++) { 
    if(rating[i].checked) 
         // console.log(rating[i].value)
   return rating[i].value 
  }
}

function displayCommentForm() {  
  document.querySelector(".insertform").innerHTML = commentForm
  const getCommentFormButton = document.querySelector("#speak");
    getCommentFormButton.addEventListener("click", function(e) {
     e.preventDefault()
      let formData = {}
      let venueComment = comment.value
      let starRating = whichRadioButtonWasSelected(rating)
      let venueId = document.querySelector(".soloclub").id
    Object.assign(formData, {stars:starRating}, {comments:venueComment}, {club_id: parseInt(venueId)})
  sendData(formData)
})
}

async function sendData(formData) {
  let postResponse = await api.postReview(formData)
    if (postResponse.errors) {
        alert(postResponse.errors)
    } else { 
              // get updated Club/Review info from the database
       let showUpdate = await renderClubs() 
       showClubDetail(parseInt(postResponse.club_id))
    }
}


const removeAddReviewButton = () => 
  reviewButton.innerText = "" 

function editReview(id) {
    let data = Review.all.find(review => review.id === parseInt(id))
    document.querySelector(".insertform").innerHTML = commentForm
    let fillComment = document.querySelector('#comment').value=data.comments
    let getCommentFormButton = document.querySelector("#speak");
        getCommentFormButton.addEventListener("click", function(e) {
         e.preventDefault()
     
        let formData = {}
        let venueComment = comment.value
        let starRating = whichRadioButtonWasSelected(rating)
        let venueId = document.querySelector(".soloclub").id
      Object.assign(formData, {id: parseInt(id)}, {stars:starRating}, {comments:venueComment}, {club_id: parseInt(venueId)})
     
      editData(formData)
    })
  }
    
async function editData(formData) {
  let postResponse = await api.editReview(formData)
    if (postResponse.errors) {
          alert(postResponse.errors)
    }   else { 
        // get updated Club/Review info from the database
 let showUpdate = await renderClubs() 
  showClubDetail(parseInt(postResponse.club_id))
  }
}

function mountToCenterPage(info) {
  const reviews = info.reviews
  reviewArray = []
    for (review of reviews) {
      reviewArray.push(review)
      }

  let club_info = 
  `
    <div class="soloclub" id=${info.id}>
    <p>${info.name}</p>
    <br><u>Location</u>: ${info.location}</br>
    <br><u>Cover Charge</u> $ ${info.cover}</br>
    <br><a href=${info.website}  target="_blank">${info.website}</a>
    <br><br>Average Rating: ${info.averageRating()}
    <br><br><button type="button" id="addreview" class="button3">Add Review</button>
    <br><br><button type="button" id="deleteclub" class="button4">Delete Club</button>
    </div>

      

    <div class="insertform"></div>
    <div class="comments"><h3> Reviews:</h3>
 
    ${info.reviews.map(log => `<p><span> ${log.comments}
    <button type="button" class="ebutton" id="edit${log.id}">Edit</button>
    </span><br>
    <span><b><i>Rating: ${log.stars}</i></b> </span><br></p>`).join("")}
   
    
    </div>
    
    `
    
  leftPage.innerHTML = club_info

  addReviewButton()
  editReviewButton()
  deleteButtonListen()
}

function editReviewButton() {
  document.querySelectorAll('.ebutton').forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault()
      let reviewID = e.target.id.split('edit')[1]
      editReview(reviewID)
    })
  })
}

// delete a Club
// pseudo code: 
  // attach a DELETE CLUB button to the showClubDetails area
  // get the Club_id
  // delete the club via api request
  // renderClubs()
  function deleteButtonListen() {
    deleteButton = document.querySelector(".button4")  
    deleteButton.addEventListener("click", function(e) {
      e.preventDefault()
      let venueId = document.querySelector(".soloclub").id
      deleteClubNow(parseInt(venueId))
      }
      )
  }

async function deleteClubNow(id) {
  let postResponse = await api.deleteClub(id)
  if (postResponse.errors) {
        alert(postResponse.errors)
  }   else { 
let showUpdate = await renderClubs() 
}


}


// function addToClass(newReview) {
//   let newId = parseInt(newReview.club_id)
//           // let finder = Club.all
//           // let found = finder.find(c => c.id === newId)
//           // let clubReviews = found.reviews
//     let clubReviews = Club.findClubById(newId).reviews
//     clubReviews.push( {comments: newReview.comments, stars: newReview.stars} )
//     showClubDetail(newId)
//     updateReviewsClass()
//     rightPage.innerHTML = Club.renderAll()
// }

// when new review added, generate new Reviews
// function updateReviewsClass() {
//   let clubs = Club.all
//   console.log('before', Review.all)
//   Review.all = []
//   for(club of clubs){
//       for (review of club.reviews){
//          new Review(review)}
//   }
//   console.log('after', Review.all)
// }

// function updateLocally(postResponse) {
  //   let newId = parseInt(postResponse.club_id)
  //     // let finder = Club.all
  //     // let found = finder.find(c => c.id === newId)
  //     let club = Club.findClubById(newId).reviews
  //     // let club = found.reviews
  //     clubReviews = club.find(rev => rev.id===parseInt(postResponse.id))
  //     clubReviews.comments = postResponse.comments
  //     clubReviews.stars = postResponse.stars
  //     showClubDetail(newId)
  //     rightPage.innerHTML = Club.renderAll()
  // }