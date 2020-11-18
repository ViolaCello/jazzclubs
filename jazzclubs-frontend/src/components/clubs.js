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



}
