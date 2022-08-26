const { instance } = require("./client.js");

//get popular movies

async function getData(path) {
  try {
    const { data } = await instance.get(path);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function run() {
  const allMedia = await getData("movie/popular?language=en-US&page=1");
  console.log(allMedia);
}

module.exports = { run };
