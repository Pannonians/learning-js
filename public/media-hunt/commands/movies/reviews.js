const { getMovieReviews } = require("../../http/movie");

const run = (id) => {
  console.log(getMovieReviews, id);
};

module.exports = { run };
