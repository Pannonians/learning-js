const normalization = (data) => ({
  title: data.original_name || data.original_title,
  year: data.first_air_date || data.release_date,
  description: data.overview,
  image: data.poster_path,
  review: data.vote_average,
});

const nameCharacterResponse = {
  cast: [
    {
      adult: false,
      gender: 2,
      id: 1372,
      known_for_department: "Acting",
      name: "Karl Urban",
      original_name: "Karl Urban",
      popularity: 35.257,
      profile_path: "/bsAnEFgVm5kn8DbBZKfnlLNll89.jpg",
      character: "Billy Butcher",
      credit_id: "5baaac490e0a2664d400bb5a",
      order: 0,
    },
    {
      adult: false,
      gender: 2,
      id: 1030513,
      known_for_department: "Acting",
      name: "Jack Quaid",
      original_name: "Jack Quaid",
      popularity: 26.155,
      profile_path: "/1BRiWg8oMkxqxH4YfEqpZCbWfFC.jpg",
      character: "Hughie Campbell",
      credit_id: "5d4821012d1e405083c02531",
      order: 1,
    },
  ],
  id: 76479,
};

const actor = nameCharacterResponse.cast.map((actorAndCharacter) => {
  glumac = {
    name: actorAndCharacter.name,
    character: actorAndCharacter.character,
  };
  return glumac;
});

const printStuffToScreen = (normalization, nameCharacterResponse) => {
  console.log([
    normalization.title,
    normalization.year,
    normalization.description,
    normalization.image,
    normalization.review + " " + showStars(normalization.review / 2),
    nameCharacterResponse,
  ]);
};

function showStars(numberOfStars) {
  if (numberOfStars >= 1 && numberOfStars <= 1.4) return "✡️";
  if (numberOfStars > 1.4 && numberOfStars <= 1.9) return "✡️ ⭐";
  if (numberOfStars > 1.9 && numberOfStars <= 2.4) return "✡️ ✡️";
  if (numberOfStars > 2.4 && numberOfStars <= 2.9) return "✡️ ✡️ ⭐";
  if (numberOfStars > 2.9 && numberOfStars <= 3.4) return "✡️ ✡️ ✡️";
  if (numberOfStars > 3.4 && numberOfStars <= 3.9) return "✡️ ✡️ ✡️ ⭐";
  if (numberOfStars > 3.9 && numberOfStars <= 4.4) return "✡️ ✡️ ✡️ ✡️";
  if (numberOfStars > 4.4 && numberOfStars < 5) return "✡️ ✡️ ✡️ ✡️ ⭐";
  if (numberOfStars === 5) return "✡️ ✡️ ✡️ ✡️ ✡️";
}

printStuffToScreen(
  normalization({
    adult: false,
    backdrop_path: "/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
    belongs_to_collection: null,
    budget: 0,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 80,
        name: "Crime",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
    ],
    homepage: "http://www.netflix.com/projectpower",
    id: 605116,
    imdb_id: "tt7550000",
    original_language: "en",
    original_title: "Project Power",
    overview:
      "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
    popularity: 33.934,
    poster_path: "/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
    production_companies: [
      {
        id: 71895,
        logo_path: null,
        name: "Supermarché",
        origin_country: "US",
      },
      {
        id: 102118,
        logo_path: null,
        name: "Screen Arcade",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2020-08-14",
    revenue: 0,
    runtime: 113,
    spoken_languages: [
      {
        english_name: "Hindi",
        iso_639_1: "hi",
        name: "हिन्दी",
      },
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
      {
        english_name: "Portuguese",
        iso_639_1: "pt",
        name: "Português",
      },
    ],
    status: "Released",
    tagline: "What would you risk for five minutes of pure power?",
    title: "Project Power",
    video: false,
    vote_average: 6.529,
    vote_count: 2396,
  }),
  actor
);

module.exports = { printStuffToScreen };
