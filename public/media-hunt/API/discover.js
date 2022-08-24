const ROOT = "/discover";

export default {
  get: {
    show: {
      url: (id) => `${ROOT}/${id}`,
    },
  },
};