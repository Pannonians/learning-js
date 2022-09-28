const { getMovieReviews } = require("../../http/movies");

const run = (id) => {
    console.log(getMovieReviews, id);
}

module.exports = { run };
