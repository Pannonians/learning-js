const { get } = require("../../API/configuration");
const { getMovieReviews } = require("../../http/movie");

const run = async (id) => {
  const getMovieReviewsResult = await getMovieReviews(id);
  console.log(getMovieReviewsResult);
};

module.exports = { run };
