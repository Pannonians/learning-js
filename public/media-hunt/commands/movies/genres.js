const { getMovieGenres } = require("../../http/movie");

const run = async () => {
  const getMovieGenresResult = await getMovieGenres();
  const getMovieGenresResultData = JSON.stringify(getMovieGenresResult);

  const fs = require("fs");
  fs.appendFile('savedData.json', getMovieGenresResultData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Genrs data is saved.");
  });
};

module.exports = { run };
