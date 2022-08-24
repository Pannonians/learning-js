export default {
  get: {
    discover: {
      url: "/discover/tv"
    },
    tv: {
      url: (id) => `/tv/${id}`
    },
    genre: {
      url: "/genre/tv/list"
    },
    topRated: {
      url: "/tv/top_rated"
    },
    reviews: {
      url: (id) => `/tv/${id}/reviews`
    },
  },
};