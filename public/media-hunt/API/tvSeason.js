const ROOT = {
  get: {
    tvSeason: {
      url: (id, season_number) => `/tv/${id}/season/${season_number}`,
    },
  },
}
export default ROOT;