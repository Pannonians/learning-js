const axios = require("axios").default;
const process = require("process");

async function getSmile() {
  try {
    const { data } = await axios.get(
      "https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function run() {
  console.log("This is smile application!");
  var arguments = process.argv.slice(2);

  const allSmiles = await getSmile();
  //console.log("All smiles: ", allSmiles);
  //console.log(args);

  function search(value) {
    return allSmiles.filter((smile) => smile.keywords.includes(value));
  }
  var list = search(...arguments);
  console.log("Filtered list: ", list);
}

module.exports = {
  run,
};
