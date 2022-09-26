const { getMoviesDiscover } = require("../../http/movie");

const run = async () => {
  const getMoviesDiscoverResults = await getMoviesDiscover();
  const getMoviesDiscoverResultsData = JSON.stringify(getMoviesDiscoverResults);

  const fs = require("fs");
  fs.appendFile('savedData.json', getMoviesDiscoverResultsData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Movie data is saved.");
  });
};

module.exports = { run };
