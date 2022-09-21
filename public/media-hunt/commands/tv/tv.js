const { getTv } = require("../../http/tv");

const run = async (id) => {
    const getTvResult = await getTv(is);
    const getTvResultData = JSON.stringify(getTvResult);

    const fs = require('fs');
    fs.writeFile('tv.json', getTvResultData, function(err){
        if (err){
            console.log(err);
        }
        console.log('JSON data is saved.');
    })
}

module.exports = { run };