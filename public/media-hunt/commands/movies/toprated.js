const { getMovieTopRated } = require("../../http/movie");
const { handleDatabase } = require("../../database/database");

const run = async () => {
  let data;
  if (handleDatabase.checkIfExists()) {
    data = handleDatabase.getDataByKey();
  } else {
    const response = await getMovieTopRated();
    data = handleDatabase.storeDataByKey(response);
  }
  console.log(data);
};

module.exports = { run };
