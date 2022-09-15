const { tv } = require("../API/index");
const { instance } = require("../client");

const getTvDiscover = instance
  .get(tv.tv.get.discover.url)
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const getTvGenres = instance
  .get(tv.tv.get.discover.url)
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const getTvTopRated = instance
  .get(tv.tv.get.discover.url)
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const getTv = async (id) =>
  await instance
    .get(tv.tv.get.discover.url(id))
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = { getTvDiscover, getTvGenres, getTvTopRated, getTv };
