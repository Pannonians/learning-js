const ROOT = "/movie";

export default {
  get: {
    show: {
      url: (id) => `${ROOT}/${id}`,
    },
  },
};