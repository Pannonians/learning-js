const { normalization } = require("../../general-data/normalizeddata");
const {
  printStuffToScreen,
  titleResponse,
  printImage,
  buildPosterUrl,
} = require("../../general-data/printstuftoscreen");
const { getMovie } = require("../../http/movie");
const {handleDatabase} = require ("../../database/database");

const run = async (id) => {
  {
    let data;
    if (handleDatabase.checkIfExists()) {
      data = handleDatabase.getDataByKey();
    } else {
      const response = await getMovie(id);
      data = handleDatabase.storeDataByKey(response);
    }
    console.log("data here", data);
  }
  const data = await getMovie(id);
  const normalized = await normalization(data);
  const printStuff = await printStuffToScreen(normalized);
  const printImageUrl = await buildPosterUrl (normalized);
  const printTitle = await titleResponse(normalized);
  await printImage(printImageUrl);
  console.log(printTitle);
  console.log(printStuff);
};

module.exports = { run };
