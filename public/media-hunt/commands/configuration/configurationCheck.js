const { promises: fsPromises } = require("fs");

async function checkIfContainsConfig() {
  try {
    const contents = await fsPromises.readFile("./savedData.json");

    const result = contents.includes(
      '{"images":{"base_url":"http://image.tmdb.org/t/p/","secure_base_url":"https://image.tmdb.org/t/p/"'
    );
    console.log(result);
    return result;
  } catch (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("File doesn't exist");
    }
  }
}

const containsConfig = checkIfContainsConfig();
module.exports = { containsConfig };
