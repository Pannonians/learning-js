const { getTvGenres } = require("../../http/tv");

const run = async () => {
  const data = await getTvGenres();
  console.log(data, id);
};

module.exports = { run };