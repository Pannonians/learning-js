const { getTvSeasons } = require("../../http/tv");

const run = async (id, season_number) => {
    const data = await getTvSeasons(id, season_number);
    console.log(data, id, season_number);
  };

module.exports = { run };