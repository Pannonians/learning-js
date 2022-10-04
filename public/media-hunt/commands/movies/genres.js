const { getMovieGenres } = require("../../http/movie");
const {handleDatabase} = require("../../database/database");

const run = async () => {
  {
    let data;
    if (handleDatabase.checkIfExists()) {
      data = handleDatabase.getDataByKey();
    } else {
      const response = await getMovieGenres();
      data = handleDatabase.storeDataByKey(response);
    }
    console.log("data here", data);
  }
  const data = await getMovieGenres();
  console.log(data);
};

module.exports = { run };
