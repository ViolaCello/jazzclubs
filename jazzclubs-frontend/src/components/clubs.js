class Club {

static all = []

    constructor(club_obj){
        this.id = club_obj.id
        this.name = club_obj.name
        this.location = club_obj.location
        this.cover = club_obj.cover
        this.website = club_obj.website
        this.reviews = club_obj.reviews
        Club.all.push(this)
      }


      htmlify(){
        // return a string template of a club in HTML form
        return (`

        <div class="rclub" id=${this.id}>
        <p>${this.name}</p>
        <br>${this.location}</br>
        <br>$ ${this.cover}</br>
        <br><a href=${this.website}  target="_blank">${this.website}</a>
    
        </div>
`)
      }

      averageRating(){
        let starsArray = []
        this.reviews.map(key => starsArray.push(key.stars))
        let result = starsArray.reduce((total, score) => total + score) / starsArray.length;
        return result
      }


      static htmlifyAll(){
        // return a string template of all clubs in HTML format
        // clear out index page Maybe
        return Club.all.map(club=> club.htmlify()).join("")
      }

      static renderAll(){
        return(`
        
            ${this.htmlifyAll()}
         
        `)
      }

}
