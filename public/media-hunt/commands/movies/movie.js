const { getMovie } = require("../../http/movie");

const run = (id) => {
  console.log(getMovie, id);
};

module.exports = { run };
