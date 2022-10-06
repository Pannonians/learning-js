const { getMovieReviews } = require("../../http/movie");

const run = async (id) => {
    const data = await getMovieReviews(id);
    console.log(data, id);
  };

module.exports = { run };