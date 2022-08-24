const ROOT = "/tvSeason";

export default {
  get: {
    show: {
      url: (id) => `${ROOT}/${id}`,
    },
  },
};