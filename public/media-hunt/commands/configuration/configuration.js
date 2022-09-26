const { getConfig } = require("../../http/configuration");
const { containsConfig } = require("./configurationCheck");

const run = async () => {
  if (await containsConfig) {
    console.log("Configuration data is saved already.");
  } else {
    const getConfigResult = await getConfig();
    const getConfigResultData = JSON.stringify(getConfigResult);

    const fs = require("fs");
    fs.appendFile("savedData.json", getConfigResultData, function (err) {
      if (err) {
        console.log(err);
      }
      console.log("Configuration data is saved.");
    });
  }
};

module.exports = { run };
