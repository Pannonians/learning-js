const { getTvSeasons } = require("../../http/tv");

const run = (id, season_number) => {
  console.log(getTvSeasons, id, season_number);
};

module.exports = { run };
