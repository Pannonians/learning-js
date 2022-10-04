const { getTvCast } = require("../../http/tv");
const { handleDatabase } = require("../../database/database");

const run = async (id) => {
  let data;
  if (handleDatabase.checkIfExists()) {
    data = handleDatabase.getDataByKey();
  } else {
    const response = await getTvCast(id);
    data = handleDatabase.storeDataByKey(response);
  }
  console.log(data, id);
};

module.exports = { run };
