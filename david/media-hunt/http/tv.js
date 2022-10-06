
const { tv } = require("../api/index");
const { instance } = require("../client");

/*const getTvDiscover = 
instance.get(tv.tv.get.discover.url)
.then((result) => {
  console.log(result.data);
})
.catch((err) => {
  console.log(err);
});*/

async function getTv() {
  try {
    const { data } = await instance
    .get(tv.tv.get.discover.url)
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getTv };
