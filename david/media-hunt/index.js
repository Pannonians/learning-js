//const { getMovies } = require("./http/movie.js");
//const { getTv } = require("./http/tv");
const { getConfig } = require("./http/configuration");
const { getTv } = require("./http/tv");
const process = require("process");

async function search(value) {
  if (value = "Config") {
    async function resultConfig() {
        const allConfig = await getConfig();

        function search1() {
            return allConfig;
          }
          var list = search1(...arguments);
          console.log("Filtered list: ", list);
      }
      return resultConfig();
  } else  {
    async function resultTv() {
        var arguments1 = process.argv;
        const allTv = await getTv();
        function search2() {
            return allTv;
          }
          var list1 = search2(...arguments1);
          console.log("Filtered list: ", list1);
      }
      return resultTv();
  }
}
return search