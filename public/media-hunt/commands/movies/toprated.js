const { getMovieTopRated } = require("../../http/movie");

const run = async () => {
  const getMovieTopRatedResult = await getMovieTopRated();
  const getMovieTopRatedResultData = JSON.stringify(getMovieTopRatedResult);

  const fs = require("fs");
  fs.writeFile("movies.json", getMovieTopRatedResultData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("JSON data is saved.");
  });
};

module.exports = { run };
