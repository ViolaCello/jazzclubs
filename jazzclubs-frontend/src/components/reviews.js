class Review {

    static all = []

    constructor(data) {
        this.id = data.id
        this.stars = data.stars
        this.comments = data.comments
        this.club_id = data.club_id
        Review.all.push(this)
    }
    
}