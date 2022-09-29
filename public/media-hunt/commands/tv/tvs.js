const { getTvDiscover } = require("../../http/tv");

const run = async () => {
    const data = await getTvDiscover();
    console.log(data);
  };

module.exports = { run };