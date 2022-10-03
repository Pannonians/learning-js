const { getMoviesDiscover } = require("../../http/movie");

const run = async () => {
  const getMoviesDiscoverResults = await getMoviesDiscover();
  console.log(getMoviesDiscoverResults);
};

module.exports = { run };
