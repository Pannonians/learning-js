const { getMovieTopRated } = require("../../http/movies");

const run = () => {
    console.log(getMovieTopRated);
}

module.exports = { run };