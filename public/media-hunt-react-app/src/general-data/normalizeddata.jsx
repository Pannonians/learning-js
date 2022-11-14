import { getTvCast } from "../http/tv";
import { getMovieCast } from "../http/movie";

const normalization = async (data) => ({
  title: data.original_name || data.original_title,
  year: data.first_air_date || data.release_date,
  description: data.overview,
  image: data.poster_path,
  review: data.vote_average + " " + showStars(data.vote_average),
  cast: await actors(data.id, !!data.seasons),
});

const creditsResponse = async (id, hasSeasons) =>
  hasSeasons ? await getTvCast(id) : await getMovieCast(id);

const actors = async (id, hasSeasons) => {
  const resp = await creditsResponse(id, hasSeasons);
  return resp.cast.map((actorAndCharacter) => {
    const tvActors = {
      name: actorAndCharacter.name,
      character: actorAndCharacter.character,
    };
    return tvActors;
  });
};

function halfStar(review) {
  const smallStar = "⭐";
  if (review - Math.floor(review) >= 0.5) return smallStar;
  return "";
}

function showStars(review) {
  const bigStar = "✡️";
  const wholeStar = bigStar.repeat(Math.floor(review / 2));
  return wholeStar + halfStar(review);
}

export { normalization };
