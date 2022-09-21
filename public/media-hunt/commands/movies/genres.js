const { getMovieGenres } = require("../../http/movie");

const run = async () => {
  const getMovieGenresResult = await getMovieGenres();
  const getMovieGenresResultData = JSON.stringify(getMovieGenresResult);

  const fs = require("fs");
  fs.writeFile("movies.json", getMovieGenresResultData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("JSON data is saved.");
  });
};

module.exports = { run };
