console.log("Hi Tony - we are loaded in the console")

const api = new ApiService();


const init = () =>{
  renderClubs()
  // bindEvents()
}

// DOM identifiers
const leftPage = document.querySelector(".column1")
const rightPage = document.querySelector(".column2")

// function

async function renderClubs(){
  const clubs = await api.getAllClubs()
  for(club of clubs){
    new Club(club)
  }
  
  rightPage.innerHTML = ""
  rightPage.innerHTML = Club.renderAll()

}


init()