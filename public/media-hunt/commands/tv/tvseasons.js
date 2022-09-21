const { getTvSeasons } = require("../../http/tv");

const run = async (id, season_number) => {
    const getTvDiscoverResult = await getTvDiscover(id, season_number);
    const getTvDiscoverResultData = JSON.stringify(getTvDiscoverResult);

    const fs = require('fs');
    fs.writeFile('tv.js', getTvDiscoverResultData, function(err){
        if (err){
            console.log(err);
        }
        console.log('JSON data is saved.');
    })
}

module.exports = { run };