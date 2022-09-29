const { normalization } = require("../../general-data/normalizeddata");
const { printStuffToScreen, titleResponse, printImage } = require("../../general-data/printstuftoscreen");
const { getMovie } = require("../../http/movie");

const run = async (id) => {
    const data = await getMovie(id);
    const normalized = await normalization(data);
    const printStuff = await printStuffToScreen(normalized);
    const printTitle = await titleResponse(normalized);
    await printImage(printStuff);
    console.log(printTitle, printStuff);
  };

module.exports = { run };