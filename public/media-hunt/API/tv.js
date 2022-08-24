const ROOT = "/tv";

export default {
  get: {
    show: {
      url: (id) => `${ROOT}/${id}`,
    },
  },
};