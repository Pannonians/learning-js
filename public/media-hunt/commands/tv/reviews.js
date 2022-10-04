const { getTvReviews } = require("../../http/tv");

const run = async (id) => {
  const data = await getTvReviews(id);
  console.log(data, id);
};

module.exports = { run };
