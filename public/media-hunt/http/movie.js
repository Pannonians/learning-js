const { movie } = require("../API/index");
const { instance } = require("../client");

async function getMoviesDiscover() {
  try {
    const { data } = await instance.get(movie.get.discover.url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieGenres() {
  try {
    const { data } = await instance.get(movie.get.genres.url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieTopRated() {
  try {
    const { data } = await instance.get(movie.get.topRated.url);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovie(id) {
  try {
    const { data } = await instance.get(movie.get.movie.url(id));
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieReviews(id) {
  try {
    const { data } = await instance.get(movie.get.reviews.url(id));
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getMoviesDiscover,
  getMovieGenres,
  getMovieTopRated,
  getMovie,
  getMovieReviews,
};
