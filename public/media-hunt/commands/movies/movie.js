const { getMovie } = require("../../http/movie");

const run = async (id) => {
  const getMovieByIdResult = await getMovie(id);
  const getMovieByIdResultData = JSON.stringify(getMovieByIdResult);

  const fs = require("fs");

  fs.readFile("./movies.json", function (err, data) {
    if (err) throw err;
    if (data.includes(`id:${id}`) >= 0) {
      console.log(getMovieByIdResult);
    } else {
      fs.writeFile("movies.json", getMovieByIdResultData, function (err) {
        if (err) {
          console.log(err);
        }
        console.log("Movie data is saved.");
      });
    }
  });
};

module.exports = { run };
