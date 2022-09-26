const { getConfig } = require("../../http/configuration");

const run = async () => {
  const data = await getConfig();
  console.log(data);
};

module.exports = { run };
