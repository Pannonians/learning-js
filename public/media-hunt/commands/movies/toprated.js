const { getMovieTopRated } = require("../../http/movie");

const run = async () => {
  const getMovieTopRatedResult = await getMovieTopRated();
  const getMovieTopRatedResultData = JSON.stringify(getMovieTopRatedResult);

  const fs = require("fs");
  fs.appendFile('savedData.json', getMovieTopRatedResultData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Movie top rated data is saved.");
  });
};

module.exports = { run };
