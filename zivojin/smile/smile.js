// smile.js
const axios = require("axios");

const url =
  "https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json";

async function getSmile() {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return []; // return empty array on error to avoid crashing search
  }
}

async function run() {
  console.log("This is smile application!");

  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Please provide a keyword (e.g., happy, cat, sad).");
    return;
  }

  const keyword = args.join(" ").toLowerCase(); // join multi-word args

  const allSmiles = await getSmile();

  const filtered = allSmiles.filter((smile) =>
    smile.keywords.toLowerCase().includes(keyword),
  );

  if (filtered.length === 0) {
    console.log("No smileys found for keyword:", keyword);
  } else {
    console.log("Filtered smileys:");
    filtered.forEach((item) => console.log(item.symbol));
  }
}

module.exports = { run };
