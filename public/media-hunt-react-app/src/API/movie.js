const movie = {
  get: {
    discover: {
      url: (pageNumber) => `/discover/movie?page=${pageNumber}`,
    },
    movie: {
      url: (id) => `/movie/${id}`,
    },
    genres: {
      url: "/genre/movie/list",
    },
    topRated: {
      url: "/movie/top_rated",
    },
    reviews: {
      url: (id) => `/movie/${id}/reviews`,
    },
    cast: {
      url: (id) => `/movie/${id}/credits`,
    },
  },
};

export default movie;
