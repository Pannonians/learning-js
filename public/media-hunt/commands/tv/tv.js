const { normalization } = require("../../general-data/normalizeddata");
const { getTv } = require("../../http/tv");

const run = async (id) => {
  const data = await getTv(id);
  console.log(await normalization(data))
};

module.exports = { run };
