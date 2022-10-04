const { getMovieReviews } = require("../../http/movie");
const { handleDatabase } = require("../../database/database");

const run = async (id) => {
  let data;
  if (handleDatabase.checkIfExists()) {
    data = handleDatabase.getDataByKey();
  } else {
    const response = await getMovieReviews(id);
    data = handleDatabase.storeDataByKey(response);
  }
  console.log(data, id);
};

module.exports = { run };
