const { get } = require("../../API/configuration");
const { getMovieReviews } = require("../../http/movie");

const run = async (id) => {
  const getMovieReviewsResult = await getMovieReviews(id);
  const getMovieReviewsResultData = JSON.stringify(getMovieReviewsResult);

  const fs = require("fs");
  fs.writeFile("movies.json", getMovieReviewsResultData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("JSON data is saved.");
  });
};

module.exports = { run };
