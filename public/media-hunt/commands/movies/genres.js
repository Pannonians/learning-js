const { getMovieGenres } = require("../../http/movie");

const run = async () => {
  const data = await getMovieGenres();
  console.log(data);
};

module.exports = { run };