const { getTvTopRated } = require("../../http/tv");

const run = async () => {
    const getTvTopRatedResult = await getTvTopRated();
    const getTvTopRatedResultData = JSON.stringify(getTvTopRatedResult);

    const fs = require('fs');
    fs.writeFile('tv.json', getTvTopRatedResultData, function(err){
        if (err){
            console.log(err);
        }
        console.log('JSON data is saved.');
    })
}

module.exports = { run };