const { normalization } = require("../../general-data/normalizeddata");
const { getMovie } = require("../../http/movie");

const run = async (id) => {
  const data = await getMovie(id);
  const normalized = await normalization(data);
  console.log(normalized);
};

module.exports = { run };
