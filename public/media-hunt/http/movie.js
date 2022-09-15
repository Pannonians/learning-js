const { movie } = require("../API/index");
const { instance } = require("../client");

const getMoviesDiscover = instance
  .get(movie.movie.get.discover.url)
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const getMovieGenres = instance
  .get(movie.movie.get.genres.url)
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const getMovieTopRated = instance
  .get(movie.movie.get.topRated.url)
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const getMovie = async (id) =>
  await instance
    .get(movie.movie.get.movie.url(id))
    .then((result) => {
      console.log(result.data);
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = {
  getMoviesDiscover,
  getMovieGenres,
  getMovieTopRated,
  getMovie,
};
