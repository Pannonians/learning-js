const { getTvReviews } = require("../../http/tv");

const run = async (id) => {
    const getTvGenresResult = await getTvReviews(id);
    const getTvGenresResultData = JSON.stringify(getTvGenresResult);

    const fs = require('fs');
    fs.writeFile('tv.json', getTvGenresResultData, function(err){
        if (err){
            console.log(err);
        }
        console.log('TV reviews data is saved.');
    })
}

module.exports = { run };