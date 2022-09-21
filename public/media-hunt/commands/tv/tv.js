const { getTv } = require("../../http/tv");

const run = async (id) => {
  const getTvResult = await getTv(is);
  const getTvResultData = JSON.stringify(getTvResult);

  fs.readFile("./tv.json", function (err, data) {
    if (err) throw err;
    if (data.includes(`id:${id}`) >= 0) {
      console.log(getTvResult);
    } else {
      fs.writeFile("movies.json", getTvResultData, function (err) {
        if (err) {
          console.log(err);
        }
        console.log("TV data is saved.");
      });
    }
  });
};

module.exports = { run };
