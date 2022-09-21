const { getTvSeasons } = require("../../http/tv");

const run = async (id, season_number) => {
    const getTvDiscoverResult = await getTvDiscover(id, season_number);
    const getTvDiscoverResultData = JSON.stringify(getTvDiscoverResult);

    const fs = require('fs');

    fs.readFile("./tv.json", function (err, data) {
        if (err) throw err;
        if (data.includes(`id:${id}`) >= 0) {
          console.log(getTvDiscoverResult);
        } else {
          fs.writeFile("movies.json", getTvDiscoverResultData, function (err) {
            if (err) {
              console.log(err);
            }
            console.log("Movie data is saved.");
          });
        }
      });
    };

module.exports = { run };