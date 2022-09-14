const axios = require("axios").default;

const instance  = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 3000,
  params: {api_key: '877e20a36c7c8f1c8291c690f0fb7066'}
});

module.exports = { instance };
