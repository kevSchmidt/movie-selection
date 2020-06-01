const movies = [
  {
    id: 1,
    title: "Into the Wild",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51sBtBUltwL._SY445_.jpg",
    description:
      "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life.",
  },
  {
    id: 2,
    title: "Ne le Dis a Personne",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51iVTqHDQDL._AC_SY445_.jpg",
    description:
      "An accidental discovery near a doctor's estate stirs up some painful memories eight years after his wife's hideous murder, and now, things are bound to take a turn for the unexpected. Does the good doctor know more than he's letting on?",
  },
  {
    id: 3,
    title: "Dances with Wolves",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/A1MmCKF4UGL._SL1500_.jpg",
    description:
      "Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.",
  },
  {
    id: 4,
    title: "The Boat that Rocked",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e3/The_boat_that_rocked_poster.jpg",
    description:
      "A band of rogue DJs that captivated Britain, playing the music that defined a generation and standing up to a government that wanted classical music, and nothing else, on the airwaves.",
  },
  {
    id: 5,
    title: "Pulp Fiction",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 6,
    title: "Billy Elliot",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91LI7Zk2dbL._SL1500_.jpg",
    description:
      "A talented young boy becomes torn between his unexpected love of dance and the disintegration of his family.",
  },
  {
    id: 7,
    title: "Fight Club",
    image:
      "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
  },
  {
    id: 8,
    title: "The Shining",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81nwnHTcV2L._SL1500_.jpg",
    description:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
  },
  {
    id: 9,
    title: "Taxi Driver",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Taxi_driver_movieposter.jpg",
    description:
      "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.",
  },
  {
    id: 10,
    title: "De Battre mon Cœur s'est Arrêté",
    image:
      "https://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/18/35/55/10/18409616.jpg",
    description:
      "Will Thomas still lead a life of crime and cruelty, just like his thuggish father, or will he pursue his dream of becoming a pianist?",
  },
  {
    id: 11,
    title: "Empire of the Sun",
    image:
      "https://tvguide1.cbsistatic.com/feed/1/844/thumbs/11967844_1300x1733.jpg",
    description:
      "A young English boy struggles to survive under Japanese occupation during World War II.",
  },
  {
    id: 12,
    title: "L'Ecume des Jours",
    image:
      "https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/l-ecume-des-jours-l-adaptation-magique-de-michel-gondry-2428310/36914589-1-fre-FR/L-Ecume-des-jours-l-adaptation-magique-de-Michel-Gondry.jpg",
    description:
      "Wealthy, inventive bachelor Colin endeavors to find a cure for his lover Chloe after she's diagnosed with an unusual illness caused by a flower growing in her lungs.",
  },
  {
    id: 13,
    title: "Black Swan",
    image:
      "https://fr.web.img6.acsta.net/medias/nmedia/18/78/85/13/19627032.jpg",
    description:
      "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky's Swan Lake.",
  },
  {
    id: 14,
    title: "Moulin Rouge!",
    image:
      "https://www.cinema.de/sites/default/files/styles/schema_org/public/sync/cms3.cinema.de/imgdb/import/dreams2/1070/147/1/107014713612.jpg?itok=XdUuzlS8",
    description:
      "A poet falls for a beautiful courtesan whom a jealous duke covets.",
  },
];

let data = JSON.stringify(movies);
export { data };
