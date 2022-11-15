import { movie } from "../API/index";
import instance from "../client";

async function getMoviesDiscover(pageNumber) {
  try {
    const { data } = await instance.get(movie.get.discover.url(pageNumber));
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

async function getMovieCast(id) {
  try {
    const { data } = await instance.get(movie.get.cast.url(id));
    return data;
  } catch (error) {
    console.log(error);
  }
}

export {
  getMoviesDiscover,
  getMovieGenres,
  getMovieTopRated,
  getMovie,
  getMovieReviews,
  getMovieCast,
};
