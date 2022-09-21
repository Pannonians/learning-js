const axios = require("axios");
require("dotenv").config();

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 2500,
});

instance.defaults.headers.common = {
  Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
};

module.exports = { instance };
