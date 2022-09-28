const { getMovie } = require("../../http/movies");

const run = (id) => {
    console.log(getMovie, id);
}

module.exports = { run };
