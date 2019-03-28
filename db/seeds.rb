
Haunt.destroy_all

User.create(email: "test@example.com", password: "password", password_confirmation: "password")
User.create(email: "test@test.com", password: "password", password_confirmation: "password")
User.create(email: "test@sample.com", password: "password", password_confirmation: "password")
 
Haunt.create!(name: "Stanley Hotel",
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

Haunt.create!(name: "Oregon Caves Chateau",
              city: "Cave Junction",
              state: "OR",
              description: "Oregon Caves Chateau was built in 1932 and it still has the same rustic atmosphere that it did back then. It is said that a spirit named Elizabeth lingers in the sixth floor hallway during the day before wandering the hotel at night. She is said to be the spirit of a young woman betrayed by her husband on their wedding night. She apparently jumped to her death from the window of Room 301 after seeing her husband in a compromising position with one of the chambermaids."
)

Haunt.create!(name: "Haunted Mansion",
              city: "Disneyland",
              state: "CA",
              description: "The Haunted Mansion is dark and contains some mildly frightening scenes, but there is no gore. The ghostly residents are friendly and the ride is slow-moving."
)

Haunt.create!(name: "Molly Brown House",
              city: "Denver",
              state: "CO",
              description: "Molly Brown (aka ‘The Unsinkable Molly Brown’), a survivor of the Titanic, now haunts her former dwelling, along with her husband, and daughter Catherine Ellen. "
)

Haunt.create!(name: "A Haunt",
              city: "Spookyplace",
              state: "CA",
              description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
)

Haunt.create!(name: "B Haunt",
              city: "Nowhere",
              state: "CO",
              description: "Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?"
)

Haunt.create!(name: "C Haunt",
              city: "Denver",
              state: "OR",
              description: "In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead."
)

Comment.create!(user_id: 1, haunt_id: 1, content: 'Very spooky place!')
Comment.create!(user_id: 2, haunt_id: 2, content: 'My kids love coming here every halloween')
Comment.create!(user_id: 3, haunt_id: 3, content: 'Beautiful location, but not very scary!')