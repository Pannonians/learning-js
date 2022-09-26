const { getMovie } = require("../../http/movie");

const run = async (id) => {
  const data = await getMovie(id);
  console.log(data, id);
};

module.exports = { run };
