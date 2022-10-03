const { getTvTopRated } = require("../../http/tv");

const run = async () => {
    const data = await getTvTopRated();
    console.log(data);
  };

module.exports = { run };