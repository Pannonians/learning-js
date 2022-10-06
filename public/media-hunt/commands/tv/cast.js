const { getTvCast } = require("../../http/tv");

const run = async (id) => {
  const data = await getTvCast(id);
  console.log(data, id);
};

module.exports = { run };
