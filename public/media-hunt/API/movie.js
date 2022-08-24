const ROOT = "/movie";

export default {
  get: {
    movie: {
      url: (id) => `/movie/${id}`,
    },
  },
};