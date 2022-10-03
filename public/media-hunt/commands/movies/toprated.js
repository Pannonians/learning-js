const { getMovieTopRated } = require("../../http/movie");

const run = async () => {
  const getMovieTopRatedResult = await getMovieTopRated();
  console.log(getMovieTopRatedResult);
};

module.exports = { run };
