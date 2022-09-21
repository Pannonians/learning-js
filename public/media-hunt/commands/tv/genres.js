const { getTvGenres } = require("../../http/tv");

const run = async () => {
  const getTvGenresResult = await getTvGenres();
  const getTvGenresResultData = JSON.stringify(getTvGenresResult);

  const fs = require('fs');
  fs.writeFile('tv.json', getTvGenresResultData, function(err){
    if(err){
      console.log(err);
    }
    console.log('TV genres data is saved.');
  })
};

module.exports = { run };
