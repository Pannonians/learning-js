const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 2500,
});

instance.default.headers.common = {
  authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzEwZDg2NTM4OTkzYmNhMjNlNWUyOWNkYjk3NGFlNCIsInN1YiI6IjVjMWM5OTQwOTI1MTQxMjdmODRlMWVmNSIsInNjb3BlcyI6WyJh"
};
module.exports = { instance };
