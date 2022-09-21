const { instance } = require("../../client");
const { getConfig } = require("../../http/configuration");

const run = async () => {
  const getConfigResult = await getConfig();
  const getConfigResultData = JSON.stringify(getConfigResult);

  const fs = require("fs");
  fs.writeFile("configuration.json", getConfigResultData, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("JSON data is saved.");
  });
};

module.exports = { run };