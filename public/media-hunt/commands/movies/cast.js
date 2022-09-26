const { getMovieCast } = require("../../http/movie");

const run = async (id) => {
  const data = await getMovieCast(id);
  console.log(data, id);
};

module.exports = { run };
