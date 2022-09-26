//normalization of response

const normalization = (data, actors) => ({
  title: data.original_name || data.original_title,
  year: data.first_air_date || data.release_date,
  description: data.overview,
  image: data.poster_path,
  review: data.vote_average + " " + showStars(data.vote_average),
  cast: actors,
});

//this is a response that gives us cast/credits
const creditsResponse = {};

//this is a logic that returs actors and their characters
const actors = creditsResponse.cast.map((actorAndCharacter) => {
  tvActors = {
    name: actorAndCharacter.name,
    character: actorAndCharacter.character,
  };
  return tvActors;
});
//this is a logic for stars calculation
function halfStar(review) {
  const smallStar = "⭐";
  if ((review - Math.floor(review) >= 0.5)) return smallStar;
  return {};
}

function showStars(review) {
  const bigStar = "✡️";
  const wholeStar = bigStar.repeat(Math.floor(review / 2));
  return wholeStar + halfStar(review);
}

//this is where response is normalized and logged
const logNormalization = (normalization) => {
  console.log([
    normalization.title,
    normalization.year,
    normalization.description,
    normalization.image,
    normalization.review,
    normalization.cast,
  ]);
};

logNormalization(normalization(actors));

module.exports = { normalization };
