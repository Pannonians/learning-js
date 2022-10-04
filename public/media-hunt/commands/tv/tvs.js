const { getTvDiscover } = require("../../http/tv");
const { handleDatabase } = require("../../database/database");

const run = async () => {
  const data = await getTvDiscover();
  console.log(data);
};

module.exports = { run };
