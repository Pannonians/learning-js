const helper = require("./help");
const args = process.argv.slice(2);

const commands = {
  configuration: () =>
    require("./commands/configuration/configuration").run(),
  movies: () => require("./commands/movies/movies").run(),
  movie: (id) => require("./commands/movies/movie").run(id),
  movieGenres: () => require("./commands/movies/genres").run(),
  movieReviewes: (id) => require("./commands/movies/reviews").run(id),
  movieTopRated: () => require("./commands/movies/toprated").run(),
  movieCast: (id) => require("./commands/movies/cast").run(id),
  tvs: () => require("./commands/tv/tvs").run(),
  tv: (id) => require("./commands/tv/tv").run(id),
  tvTopRated: () => require("./commands/tv/toprated").run(),
  tvGenres: () => require("./commands/tv/genres").run(),
  tvReviews: (id) => require("./commands/tv/reviews").run(id),
  tvCast: (id) => require("./commands/tv/cast").run(id),
  tvSeasons: (id, season_number) =>
    require("./commands/tv/tvseasons").run(id, season_number),
  "--help": () => helper.run(),
};

if (args.length === 0) {
  helper.run();
  process.exit(0);
}

try {
  commands[args[0]](...args.slice(1));
} catch (error) {
  console.log(error);
}
