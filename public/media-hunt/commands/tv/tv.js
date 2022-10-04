const { normalization } = require("../../general-data/normalizeddata");
const {
  printStuffToScreen,
  titleResponse,
  printImage,
} = require("../../general-data/printstuftoscreen");
const { getTv } = require("../../http/tv");
const { handleDatabase } = require("../../database/database");

const run = async (id) => {
  {
    let data;
    if (handleDatabase.checkIfExists()) {
      data = handleDatabase.getDataByKey();
    } else {
      const response = await getTv(id);
      data = handleDatabase.storeDataByKey(response);
    }
    console.log("data here", data);
  }
  const data = await getTv(id);
  const normalized = await normalization(data);
  const printStuff = await printStuffToScreen(normalized);
  const printTitle = await titleResponse(normalized);
  await printImage(printStuff);
  console.log(printTitle, printStuff);
};

module.exports = { run };
