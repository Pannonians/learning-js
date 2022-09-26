const { getTv } = require("../../http/tv");

const run = async (id) => {
  const data = await getTv(id);
  console.log(data, id);
};

module.exports = { run };
