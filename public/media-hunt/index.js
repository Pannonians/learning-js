const args = process.argv.slice(2);

const commands = {
  configuration: () => require("./commands/configuration").run(),
  movies: () => require("./commands/movies/movies").run(),
  movie: (id) => require("./commands/movies/movie").run(id),
  movieGanres: () => require("./commands/movies/ganres").run(),
  movieReviewes: (id) => require("./commands/movies/reviews").run(id),
  movieTopRated: () => require("./commands/movies/toprated").run(),
  TVs: () => require("./commands/tv/tvs").run(),
  tv: (id) => require("./commands/tv/tv").run(id),
  tvTopRated: () => require("./commands/tv/toprated").run(),
  tvGanres: () => require("./commands/tv/ganres").run(),
  tvReviews: (id) => require("./commands/tv/reviews").run(id),
  tvSeasons: (id, season_number) => require("./commands/tv/tvseasons").run(id, season_number),
};

if (args.length === 0) {
  console.log("Helper");
  return;
}

try {
  commands[args[0]](args[1]);
} catch (error) {
  console.log("Command not found");
}
