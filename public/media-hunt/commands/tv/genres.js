const { getTvGenres } = require("../../http/tv");
const { handleDatabase } = require("../../database/database");

const run = async () => {
  let data;
  if (handleDatabase.checkIfExists()) {
    data = handleDatabase.getDataByKey();
  } else {
    const response = await getTvGenres();
    data = handleDatabase.storeDataByKey(response);
  }
  console.log(data);
};

module.exports = { run };
