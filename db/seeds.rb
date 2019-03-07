
Haunt.destroy_all

User.create(email: "test@example.com", password: "password", password_confirmation: "password")
User.create(email: "test@test.com", password: "password", password_confirmation: "password")
User.create(email: "test@sample.com", password: "password", password_confirmation: "password")
 
Haunt.create!(name: "The Stanley Hotel",
              city: "Estes Park",
              state: "CO",
              description: "One night in this hotel nestled in Colorado’s mountain wilderness inspired Stephen King’s best-selling novel turned horror film, The Shining. Massachusetts couple F.O. and Flora Stanley opened the isolated resort in 1909—and reportedly never left."
)

Haunt.create!(name: "Winchester Mystery House",
              city: "San Jose",
              state: "CA",
              description: "The Winchester Mystery House is a mansion in San Jose, California, that was once the personal residence of Sarah Winchester, the widow of firearm magnate William Wirt Winchester. Located at 525 South Winchester Blvd. in San Jose, the Queen Anne Style Victorian mansion is renowned for its size, its architectural curiosities, and its lack of any master building plan. It is a designated California historical landmark and is listed on the National Register of Historic Places. It is privately owned and serves as a tourist attraction."
)

Haunt.create!(name: "Pittock Mansion",
              city: "Portland",
              state: "OR",
              description: "A 22-room French chateau in the hills overlooking downtown Portland built in 1922, the Pittock Mansion was the site of only two deaths (original residents Georgiana [1918; age 72] and Henry Pittock [1919; age 84]) and one political scandal (Pittock was able to get a water line installed to the mansion at the city's expense, despite the property being outside city limits), but since being opened to the public in 1965, it's been host to a number of ghost sightings, including floating old ladies, boots walking without legs, portraits moving of their own accord, windows opening and shutting themselves, and, perhaps most improbably, a tree with a face in it. The Mansion was also where the 1982 slasher film Unhinged and Madonna's 1993 answer-to-Sharon-Stone's-Basic-Instinct clunker Body of Evidence were filmed."
)

Comment.create!(user_id: 1, haunt_id: 1, content: 'Very spooky place!')
Comment.create!(user_id: 2, haunt_id: 2, content: 'My kids love coming here every halloween')
Comment.create!(user_id: 3, haunt_id: 3, content: 'Beautiful location, but not very scary!')