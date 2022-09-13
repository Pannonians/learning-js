module.export = {
  get: {
    discover: {
      url: "/discover/tv",
    },
    tv: {
      url: (id) => `/tv/${id}`,
    },
    genre: {
      url: "/genre/tv/list",
    },
    topRated: {
      url: "/tv/top_rated",
    },
    reviews: {
      url: (id) => `/tv/${id}/reviews`,
    },
    tvSeason: {
      url: (id, season_number) => `/tv/${id}/season/${season_number}`,
    },
  },
};
