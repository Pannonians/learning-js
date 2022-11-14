import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 2500,
});

instance.defaults.headers.common = {
  Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
};

export default instance;
