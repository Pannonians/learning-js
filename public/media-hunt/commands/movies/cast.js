const { getMovieCast } = require("../../http/movie");
const { handleDatabase } = require("../../database/database");

const run = async (id) => {
  let data;
  if (handleDatabase.checkIfExists()) {
    data = handleDatabase.getDataByKey();
  } else {
    const response = await getMovieCast(id);
    data = handleDatabase.storeDataByKey(response);
  }
  console.log(data, id);
};
module.exports = { run };
