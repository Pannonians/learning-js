const { getMovieTopRated } = require("../../http/movie");

const run = async () => {
  const data = await getMovieTopRated();
  console.log(data);
};

module.exports = { run };
