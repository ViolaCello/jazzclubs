# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.delete_all
Club.delete_all


club = Club.create(name: "Silvana", location: "Harlem", cover: 15, website: "https://silvana-nyc.com/")
review1 = Review.create(stars: 5, comments: "Great food upstairs, best raw jazz talent jamming all night downstairs!")
review2 = Review.create(stars: 4, comments: "The musicians are great, but why does the sound board operator mic the bass drum so loud?")

club.reviews << review1
club.reviews << review2