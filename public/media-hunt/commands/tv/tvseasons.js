const { getTvSeasons } = require("../../http/tv");
const { handleDatabase } = require("../../database/database");

const run = async (id, season_number) => {
  {
    let data;
    if (handleDatabase.checkIfExists()) {
      data = handleDatabase.getDataByKey();
    } else {
      const response = await getTvSeasons(id, season_number);
      data = handleDatabase.storeDataByKey(response);
    }
    console.log("data here", data);
  }
  const data = await getTvSeasons(id, season_number);
  console.log(data, id, season_number);
};

module.exports = { run };
