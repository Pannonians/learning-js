const tv = {
  get: {
    discover: {
      url: (pageNumber) => `/discover/tv?page=${pageNumber}`,
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
    cast: {
      url: (id) => `/tv/${id}/credits`,
    },
  },
};

export default tv;
