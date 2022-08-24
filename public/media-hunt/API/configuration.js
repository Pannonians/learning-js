const ROOT = "/configuration";

export default {
  get: {
    show: {
      url: (id) => `${ROOT}/${id}`,
    },
  },
};