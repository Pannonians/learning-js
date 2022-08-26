const axios = require("axios");
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 2500,
  params: {api_key: '109f8c8c06f943d5e337e7141b1dad67'}
});

module.exports = {instance};
