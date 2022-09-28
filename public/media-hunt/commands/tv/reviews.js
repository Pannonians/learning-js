const { getTvReviews } = require("../../http/tv");

const run = (id) => {
  console.log(getTvReviews, id);
};

module.exports = { run };
