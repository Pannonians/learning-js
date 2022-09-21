const { getMovie } = require("../../http/movie");

const run = async (id) => {
  const getMovieByIdResult = await getMovie(id);
  const getMovieByIdResultData = JSON.stringify(getMovieByIdResult);

  const fs = require("fs");
  fs.writeFile("movies.json", getMovieByIdResultData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("JSON data is saved.");
  });
};

module.exports = { run };
