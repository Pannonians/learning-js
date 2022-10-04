const { getTvReviews } = require("../../http/tv");
const { handleDatabase } = require("../../database/database");

const run = async (id) => {
  let data;
  if (handleDatabase.checkIfExists()) {
    data = handleDatabase.getDataByKey();
  } else {
    const response = await getTvReviews(id);
    data = handleDatabase.storeDataByKey(response);
  }
  console.log(data, id);
};

module.exports = { run };
