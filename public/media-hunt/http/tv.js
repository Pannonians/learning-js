const { tv } = require("../API/index");
const { instance } = require("../client");

async function getTvDiscover() {
  try {
    const { data } = await instance.get(tv.get.discover.url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getTvGenres() {
  try {
    const { data } = await instance.get(tv.get.genre.url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getTvTopRated() {
  try {
    const { data } = await instance.get(tv.get.topRated.url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getTv(id) {
  try {
    const { data } = await instance.get(tv.get.tv.url(id));
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function getTvReviews(id) {
  try {
    const { data } = await instance.get(tv.get.reviews.url(id));
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTvDiscover,
  getTvGenres,
  getTvTopRated,
  getTv,
  getTvReviews,
};
