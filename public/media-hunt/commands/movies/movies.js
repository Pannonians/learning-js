const { getMoviesDiscover } = require("../../http/movie");
const { handleDatabase } = require("../../database/database");

const run = async () => {
  {
    let data;
    if (handleDatabase.checkIfExists()) {
      data = handleDatabase.getDataByKey();
    } else {
      const response = await getMoviesDiscover();
      data = handleDatabase.storeDataByKey(response);
    }
    console.log("data here", data);
  }
  const data = await getMoviesDiscover();
  console.log(data);
};

module.exports = { run };
