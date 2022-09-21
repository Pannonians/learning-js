const axios = require("axios");
require("dotenv").config();

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 5000,
});

instance.defaults.headers.common = {
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwZDg2NTM4OTkzYmNhMjNlNWUyOWNkYjk3NGFlNCIsInN1YiI6IjVjMWM5OTQwOTI1MTQxMjdmODRlMWVmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.csMyKzkblGa8r-2EPryAbFrm_k5LcOZae1tgvTAXxFY',
};

module.exports = { instance };
