const { getTvDiscover } = require("../../http/tv");

const run = async () => {
    const getTvDiscoverResult = await getTvDiscover();
    const getTvDiscoverResultData = JSON.stringify(getTvDiscoverResult);

    const fs = require('fs');
    fs.writeFile('tv.json', getTvDiscoverResultData, function(err){
        if (err){
            console.log(err);
        }
        console.log('TVs data is saved.');
    })
}

module.exports = { run };