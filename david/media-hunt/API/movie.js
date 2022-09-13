export default {
    get: {
      discover: {
        url: "/discover/movie",
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
    },
  };
  