const { get } = require("../../API/configuration");
const { getMovieReviews } = require("../../http/movie");

const run = async (id) => {
  const getMovieReviewsResult = await getMovieReviews(id);
  const getMovieReviewsResultData = JSON.stringify(getMovieReviewsResult);

  const fs = require("fs");

  fs.readFile("./movies.json", function (err, data) {
    if (err) throw err;
    if (data.includes(`id:${id}`) >= 0) {
      console.log(getMovieReviewsResult);
    } else {
      fs.writeFile("movies.json", getMovieReviewsResultData, function (err) {
        if (err) {
          console.log(err);
        }
        console.log("Movie data is saved.");
      });
    }
  });
};

module.exports = { run };
